import {
  AutorunState,
  HsmEventType,
  HSMStateData,
  HState,
  HStateType,
  HsmType,
  autorunStateFromState,
  // HsmState,
} from '../../type';
import { isNil } from 'lodash';
import {
  STPlayerEventHandler,
  STPlayingEventHandler,
  STWaitingEventHandler,
  playerHsmGetInitialState,
} from './playerHsm';
import { initializeVideoOrImagesZoneHsm, videoOrImagesZoneHsmGetInitialState } from './mediaZoneHsm';
import {
  getHsmById,
  // getActiveHStateIdByHsmId
} from '../../selector';
import {
  AutorunDispatch, AutorunVoidThunkAction,
} from '../../model';
import { STVideoStateEventHandler } from './videoState';
import { STImageStateEventHandler } from './imageState';
// import { STSuperStateEventHandler } from './superState';
// import { STMrssStateEventHandler } from './mrssState';
// import { logHsmEvent } from '../../utility/logger';

export const hsmConstructorFunction = (hsmId: string): AutorunVoidThunkAction => {
  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {
    const hsm = getHsmById(autorunStateFromState(getState()), hsmId);
    if (!isNil(hsm)) {
      switch (hsm.type) {
        case HsmType.Player:
          break;
        case HsmType.VideoOrImages: {
          return dispatch(initializeVideoOrImagesZoneHsm(hsmId));
        }
        default:
          debugger;
      }
    }
    return;
  });
};

export const hsmInitialPseudoStateHandler = (hsmId: string) => {
  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {
    const hsm = getHsmById(autorunStateFromState(getState()), hsmId);
    switch (hsm.type) {
      case HsmType.Player:
        const playerHsmAction = playerHsmGetInitialState();
        return dispatch(playerHsmAction);
      case HsmType.VideoOrImages:
        const videoOrImagesZoneHsmAction = videoOrImagesZoneHsmGetInitialState(hsmId);
        return dispatch(videoOrImagesZoneHsmAction);
      default:
        // TEDTODO
        debugger;
    }
    return;
  });
};

export const HStateEventHandler = (
  hState: HState,
  event: HsmEventType,
  stateData: HSMStateData
): any => {
  return ((dispatch: AutorunDispatch, getState: () => AutorunState) => {

    // const hsmStateBefore: HsmState = getState().bsPlayer.hsmState;

    let retVal: any = null;

    if (!isNil(hState)) {
      switch (hState.type) {
        case HStateType.Top:
          retVal = dispatch(STTopEventHandler(hState, event, stateData) as any);
          break;
        case HStateType.Player:
          retVal = dispatch(STPlayerEventHandler(hState, event, stateData));
          break;
        case HStateType.Playing:
          retVal = dispatch(STPlayingEventHandler(hState, event, stateData));
          break;
        case HStateType.Waiting:
          retVal = dispatch(STWaitingEventHandler(hState, event, stateData));
          break;
        case HStateType.Image:
          retVal = dispatch(STImageStateEventHandler(hState, event, stateData));
          break;
        case HStateType.Video:
          retVal = dispatch(STVideoStateEventHandler(hState, event, stateData));
          break;
        // case HStateType.SuperState:
        //   retVal = dispatch(STSuperStateEventHandler(hState, event, stateData));
        //   break;
        // case HStateType.Mrss:
        //   retVal = dispatch(STMrssStateEventHandler(hState, event, stateData));
        //   break;
        default:
          debugger;
          break;
      }
    }

    // console.log('** HStateEventHandler');
    // console.log(hState.type);
    // console.log(event.EventType);
    // console.log(event.EventData);
    // console.log('bsPlayerState before:');
    // console.log(hsmStateBefore);

    // const hStateAfter: HState = getActiveHStateIdByHsmId(getState(), hState.hsmId) as HState;
    // const hsmStateAfter: HsmState = getState().bsPlayer.hsmState;
    // console.log('hsmState after:');
    // console.log(hsmStateAfter);

    // logHsmEvent(getState(), hState, hsmStateBefore, event, hStateAfter, hsmStateAfter);

    return retVal;
  });
};

const STTopEventHandler = (hState: HState, _: HsmEventType, stateData: HSMStateData) => {
  return ((dispatch: AutorunDispatch) => {
    stateData.nextStateId = null;
    return 'IGNORED';
  });
};
