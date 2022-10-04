import { isNil } from 'lodash';
import isomorphicPath from 'isomorphic-path';
import * as fs from 'fs-extra';

import {
  AutorunState, autorunStateFromState,
  RawSyncSpec,
  AutorunSchedule,
  SyncSpecFileMap,
  //   autorunStateFromState,
  //   RuntimeEnvironment,
} from '../type';
import {
  AutorunDispatch,
  AutorunVoidPromiseThunkAction,
  AutorunVoidThunkAction,
  updatePresentationSrcDirectory,
  updateRuntimeEnvironment,
  updateScreenDimensions,
} from '../model';
import { RuntimeEnvironment } from '../type';

import {
  updatePresentationAutoschedule,
  //   updateRuntimeEnvironment,
  //   updatePresentationSrcDirectory,
  updatePresentationSyncSpecFileMap,
  //   updatePresentationAutoschedule,
  //   updateScreenDimensions
} from '../model/presentation';
import {
  getRuntimeEnvironment,
  getSrcDirectory,
  getSyncSpecFile,
  getAutoschedule,
  getSyncSpecFileMap,
  getSyncSpecReferencedFile
} from '../selector';
import { launchHsm } from './hsmController';
import { DmSignState, dmOpenSign } from '@brightsign/bsdatamodel';
// import { baCmGetPresentationLocator } from '@brightsign/ba-context-model';
// import { BsAssetLocator } from '@brightsign/bscore';

export const initPresentation = (): AutorunVoidThunkAction => {
  return ((dispatch: AutorunDispatch) => {
    dispatch(loadPresentationData()).then(() => {
      dispatch(launchHsm() as any);
    });
  });
};

const loadPresentationData = (): AutorunVoidPromiseThunkAction => {
  return ((dispatch: AutorunDispatch) => {
    dispatch(setRuntimeEnvironment());
    dispatch(setSrcDirectory());
    return dispatch(setSyncSpec())
      .then(() => {
        return dispatch(setAutoschedule());
      });
  });
};

const setRuntimeEnvironment = (): AutorunVoidThunkAction => {
  return ((dispatch: AutorunDispatch) => {
    // const runtimeEnvironment: RuntimeEnvironment = RuntimeEnvironment.BaconPreview;
    // let runtimeEnvironment: RuntimeEnvironment = RuntimeEnvironment.Dev;
    let runtimeEnvironment = RuntimeEnvironment.Dev;

    // try {
    //   const gpio = new BSControlPort('BrightSign') as BSControlPort;
    //   console.log('create controlPort: ');
    //   console.log(gpio);
    //   runtimeEnvironment = RuntimeEnvironment.BrightSign;
    // } catch (e) {
    //   console.log('failed to create controlPort: ', e);
    // }
    // const BSDeviceInfo = require('BSDeviceInfo');
    // const deviceInfo = new BSDeviceInfo();
    // console.log(deviceInfo);

    // try {
    //   const gpio = new BSControlPort('BrightSign') as BSControlPort;
    //   console.log('create controlPort: ');
    //   console.log(gpio);
    //   runtimeEnvironment = RuntimeEnvironment.BrightSign;
    // } catch (e) {
    //   // runtimeEnvironment = 'Desktop';
    //   console.log('failed to create controlPort: ');
    // }
    dispatch(updateRuntimeEnvironment(runtimeEnvironment));
  });
};

const setSrcDirectory = (): AutorunVoidThunkAction => {
  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {

    const process = require('process');

    const bsPpState: AutorunState = autorunStateFromState(getState());
    const runtimeEnvironment: RuntimeEnvironment = getRuntimeEnvironment(bsPpState);
    let srcDirectory = '';
    if (runtimeEnvironment === RuntimeEnvironment.Dev) {
      require('dotenv').config();

      dispatch(updateScreenDimensions({
        width: process.env.SCREEN_WIDTH,
        height: process.env.SCREEN_HEIGHT,
      }));

      srcDirectory = process.env.SOURCE_DIRECTORY;
    } else if (runtimeEnvironment === RuntimeEnvironment.BaconPreview) {
      srcDirectory = '/Users/tedshaffer/Desktop/autotron-2020';
    } else {
      process.chdir('/storage/sd');
    }
    dispatch(updatePresentationSrcDirectory(srcDirectory));
  });
};



const setSyncSpec = (): AutorunVoidPromiseThunkAction => {
  return ((dispatch: AutorunDispatch, getState: () => any) => {
    const bsPpState: AutorunState = autorunStateFromState(getState());
    const srcDirectory = getSrcDirectory(bsPpState);
    return getSyncSpec(srcDirectory)
      .then((syncSpec) => {
        const syncSpecFileMap: SyncSpecFileMap = {};
        for (const syncSpecDownload of syncSpec.files.download) {
          syncSpecFileMap[syncSpecDownload.name] = syncSpecDownload;
        }
        dispatch(updatePresentationSyncSpecFileMap(syncSpecFileMap));
        return Promise.resolve();
      });
  });
};

const setAutoschedule = (): AutorunVoidPromiseThunkAction => {
  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {
    return new Promise((resolve, reject) => {
      const bsPpState: AutorunState = autorunStateFromState(getState());
      getSyncSpecFile(bsPpState, 'autoschedule.json')
        .then((autoSchedule: AutorunSchedule) => {
          dispatch(updatePresentationAutoschedule(autoSchedule));
          return resolve(null);
        });
    });
  });
};

function getSyncSpec(rootDirectory: string): Promise<RawSyncSpec> {
  return getSyncSpecFilePath(rootDirectory)
    .then((syncSpecFilePath: string | null) => {
      if (!syncSpecFilePath) {
        // TEDTODO - error object
        return Promise.reject('no sync spec found');
      } else {
        return Promise.resolve(readSyncSpec(syncSpecFilePath));
      }
    });
}

function getSyncSpecFilePath(rootDirectory: string): Promise<string | null> {
  return getLocalSyncSpec(rootDirectory)
    .then((localSyncSpecFilePath) => {
      if (isNil(localSyncSpecFilePath)) {
        return getNetworkedSyncSpec(rootDirectory);
      } else {
        return Promise.resolve(localSyncSpecFilePath);
      }
    });
}

function getNetworkedSyncSpec(rootDirectory: string): Promise<string | null> {
  const filePath: string = getNetworkedSyncSpecFilePath(rootDirectory);
  return fs.pathExists(filePath)
    .then((exists: boolean) => {
      if (exists) {
        return Promise.resolve(filePath);
      } else {
        return Promise.resolve(null);
      }
    });
}

function getLocalSyncSpec(rootDirectory: string): Promise<string | null> {
  const filePath: string = getLocalSyncSpecFilePath(rootDirectory);
  return fs.pathExists(filePath)
    .then((exists: boolean) => {
      if (exists) {
        return Promise.resolve(filePath);
      } else {
        return Promise.resolve(null);
      }
    });
}

function getLocalSyncSpecFilePath(rootDirectory: string): string {
  return isomorphicPath.join(rootDirectory, 'local-sync.json');
}

function getNetworkedSyncSpecFilePath(rootDirectory: string): string {
  return isomorphicPath.join(rootDirectory, 'current-sync.json');
}

function readSyncSpec(syncSpecFilePath: string): Promise<RawSyncSpec> {
  return fs.readFile(syncSpecFilePath, 'utf8')
    .then((syncSpecStr: string) => {
      const syncSpec: RawSyncSpec = JSON.parse(syncSpecStr);
      return Promise.resolve(syncSpec);
    });
}

const openSignDev = (presentationName: string) => {

  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {

    const autoSchedule: AutorunSchedule | null = getAutoschedule(autorunStateFromState(getState()));
    if (!isNil(autoSchedule)) {
      //  - only a single scheduled item is currently supported
      const scheduledPresentation = autoSchedule!.scheduledPresentations[0];
      const presentationToSchedule = scheduledPresentation.presentationToSchedule;
      presentationName = presentationToSchedule.name;
      const autoplayFileName = presentationName + '.bml';

      const syncSpecFileMap = getSyncSpecFileMap(autorunStateFromState(getState()));
      if (!isNil(syncSpecFileMap)) {
        return getSyncSpecReferencedFile(
          autoplayFileName,
          syncSpecFileMap!,
          getSrcDirectory(autorunStateFromState(getState())))
          .then((bpfxState: any) => {
            const autoPlay: any = bpfxState.bsdm;
            const signState = autoPlay as DmSignState;
            dispatch(dmOpenSign(signState));
          });
      }
      return Promise.resolve();
    } else {
      return Promise.resolve();
    }
  });
};

// const openSignBaconPreview = (presentationName: string) => {
//   return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {
//     const state = getState();
//     const presentationLocator: BsAssetLocator | null = baCmGetPresentationLocator(state);
//     if (!isNil(presentationLocator)) {
//       const filePath: string = isomorphicPath.join(presentationLocator.path, presentationLocator.name);
//       return fs.readFile(filePath, 'utf8')
//         .then((fileStr: string) => {
//           const file: any = JSON.parse(fileStr);
//           dispatch(dmOpenSign(file.bsdm));
//           return Promise.resolve();
//         });

//     } else {
//       debugger;
//       return Promise.resolve();
//     }
//   });
// };

// const openSignBrightSign = (presentationName: string) => {
//   return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {

//     const autoSchedule: AutorunSchedule | null = getAutoschedule(autorunStateFromState(getState()));
//     if (!isNil(autoSchedule)) {

//       //  - only a single scheduled item is currently supported
//       const scheduledPresentation = autoSchedule!.scheduledPresentations[0];
//       const presentationToSchedule = scheduledPresentation.presentationToSchedule;
//       presentationName = presentationToSchedule.name;
//       const autoplayFileName = presentationName + '.bml';

//       const syncSpecFileMap = getSyncSpecFileMap(autorunStateFromState(getState()));
//       if (!isNil(syncSpecFileMap)) {
//         return getSyncSpecReferencedFile(
//           autoplayFileName,
//           syncSpecFileMap!,
//           getSrcDirectory(autorunStateFromState(getState())))
//           .then((bpfxState: any) => {
//             const autoPlay: any = bpfxState.bsdm;
//             const signState = autoPlay as DmSignState;
//             dispatch(dmOpenSign(signState));
//           });
//       }
//       return Promise.resolve();
//     } else {
//       return Promise.resolve();
//     }
//   });
// };

export const openSign = (presentationName: string) => {

  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {

    const runtimeEnvironment: RuntimeEnvironment = getRuntimeEnvironment(getState());

    if (runtimeEnvironment === RuntimeEnvironment.BaconPreview) {
      // const action = openSignBaconPreview(presentationName);
      // const promise = dispatch(action as any);
      // return promise;
    } else if (runtimeEnvironment === RuntimeEnvironment.Dev) {
      const action = openSignDev(presentationName);
      const promise = dispatch(action as any);
      return promise;
    } else {
      // const action = openSignBrightSign(presentationName);
      // const promise = dispatch(action as any);
      // return promise;
    }
  });
};