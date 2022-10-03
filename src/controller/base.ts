import {
  BsUiModelState,
  createModel,
  createTemplate,
  createTemplateProperty,
  createBsColor,
} from '../type';
import {
  // BsUiModelAction,
  // BsUiModelThunkAction,
  // BsUiModelDispatch,
  bsUiModelRehydrateModel,
  bsUiModelResetModel,
} from '../model';

import Registry from '@brightsign/registry';
import HostConfig from '@brightsign/hostconfiguration';

// import { NetworkConfiguration } from '@brightsign/networkconfiguration';
import { NetworkInterfaceConfig } from '@brightsign/networkconfiguration';
import { Mode } from '@brightsign/videomodeconfiguration';

// const NetworkConfigClass = require("@brightsign/networkconfiguration") as NetworkInterfaceConfig;
const NetworkConfigClass = require("@brightsign/networkconfiguration");
const networkConfigEth = new NetworkConfigClass("eth0");

const VideoModeConfigurationClass = require("@brightsign/videomodeconfiguration");
var videoConfig = new VideoModeConfigurationClass();

console.log('******************* create HostConfig');
const hc = new HostConfig();
console.log('******************* HostConfig created');
hc.getConfig()
  .then(console.log)
  .catch();

const registry = new Registry();

const promises: Promise<string | object>[] = [];
promises.push(registry.read('networking', 'isBrightWall'));
promises.push(registry.read('networking', 'brightwall_num_columns'));
promises.push(videoConfig.getActiveMode());
promises.push(networkConfigEth.getConfig());
Promise.all(promises)
  .then((brightSignValues) => {
    console.log('brightSignValues retrieved');
    console.log(brightSignValues);
    console.log(brightSignValues[0]);
    console.log(brightSignValues[1]);
    console.log(brightSignValues[2]);
    console.log(brightSignValues[3]);

    const mode: Mode = brightSignValues[2] as Mode;
    console.log('videoMode: ', mode);
    console.log(mode.width, mode.height);

    const networkConfig = brightSignValues[3] as NetworkInterfaceConfig;
    console.log('networkConfig');
    // console.log('type: ', networkConfig.type);
    console.log(Object.keys(networkConfig).length);
    console.log(Object.keys(networkConfig));
    console.log(Object.values(networkConfig));
    console.log('networkConfigEth');
    console.log(Object.keys(networkConfigEth).length);
    console.log(Object.keys(networkConfigEth));
    // console.log(Object.values(networkConfigEth));
    // console.log('networkConfigEth properties');
    // console.log('clientIdentifier: ', networkConfigEth.clientIdentifier);
    // console.log('domain: ', networkConfigEth.domain);
    // console.log('identity: ', networkConfigEth.identity);
    

  });

// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------

const fetchModelAsync = (): Promise<BsUiModelState> => {
  return new Promise((resolve) => {
    const color = createBsColor(255, 0, 0, 0);
    const templateProperty = createTemplateProperty(color);
    const template = createTemplate(templateProperty);
    const model = createModel(template);
    resolve(model);
  });
};

// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------

export const initModel = () => {
  return (dispatch: any) => {
    return fetchModelAsync()
      .then((model) => dispatch(bsUiModelRehydrateModel(model)));
  };
};

export const resetModel = () => {
  return (dispatch: any) => {
    return dispatch(bsUiModelResetModel());
  };
};
