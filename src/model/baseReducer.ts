/** @module Model:base */

import {
  Reducer,
  combineReducers
} from 'redux';
import { isNil } from 'lodash';
import { AutorunPlayerState, BsUiModelState } from '../type';
import {
  BSUIMODEL_BATCH,
  BsUiModelBaseAction,
  BsUiModelBatchAction,
  AutorunModelBaseAction,
} from './baseAction';
import {
  templateReducer,
  isValidTemplateState,
} from './template';
import { hsmReducer } from './hsm';
import { presentationDataReducer } from './presentation';
import { playbackReducer } from './playback';

// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------

export type BsUiReducer = Reducer<BsUiModelState>;
const enableBatchingOld = (
    reduce: (state: BsUiModelState, action: BsUiModelBaseAction | BsUiModelBatchAction) => BsUiModelState,
): BsUiReducer => {
  return function batchingReducer(
    state: BsUiModelState,
    action: BsUiModelBaseAction | BsUiModelBatchAction,
  ): BsUiModelState {
    switch (action.type) {
      case BSUIMODEL_BATCH:
        return (action as BsUiModelBatchAction).payload.reduce(batchingReducer, state);
      default:
        return reduce(state, action);
    }
  };
};

export const bsUiModelReducer: BsUiReducer = enableBatchingOld(combineReducers<BsUiModelState>({
  template: templateReducer,
}));

export type AutorunReducer = Reducer<AutorunPlayerState>;
export const enableBatching = (
  reduce: (state: AutorunPlayerState, action: AutorunModelBaseAction) => AutorunPlayerState,
): AutorunReducer => {
  return function batchingReducer(
    state: AutorunPlayerState,
    action: AutorunModelBaseAction,
  ): AutorunPlayerState {
    switch (action.type) {
      default:
        return reduce(state, action);
    }
  };
};

export const autorunReducer = enableBatching(combineReducers<AutorunPlayerState>({
  hsmState: hsmReducer,
  playback: playbackReducer,
  presentationData: presentationDataReducer,
}));


// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

export const isValidBsUiModelState = (state: any): boolean => {
  return !isNil(state)
    && state.hasOwnProperty('template') && isValidTemplateState(state.template);
};

export const isValidBsUiModelStateShallow = (state: any): boolean => {
  return !isNil(state)
    && state.hasOwnProperty('template');
};