/** @module Model:base */

import {
  Action,
  Dispatch,
  ActionCreator,
} from 'redux';
import { BsUiModelState } from '../type';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

export const BSUIMODEL_BATCH = 'BSUIMODEL_BATCH';
export const BSUIMODEL_REHYDRATE = 'BSUIMODEL_REHYDRATE';
export const BSUIMODEL_RESET = 'BSUIMODEL_RESET';

export type BsUiModelDispatch = Dispatch<BsUiModelState>;

export interface BsUiModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload: {};
  error?: boolean;
  meta?: {};
}

export interface BsUiModelAction<T> extends BsUiModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

export type BsUiModelActionCreator<T> = ActionCreator<BsUiModelAction<T>>;
export type BsUiModelThunkAction<T> = (
  dispatch: BsUiModelDispatch,
  getState: () => BsUiModelState,
  extraArgument: undefined,
) => T;

export const bsUiModelBatchAction = (action: BsUiModelBaseAction[]): BsUiModelBatchAction => {
  return {type: BSUIMODEL_BATCH, payload: action};
};

export interface BsUiModelBatchAction extends Action {
  type: string;
  payload: BsUiModelBaseAction[];
}

export interface RehydrateBsUiModelParams {
  newBsUiModelState: BsUiModelState;
}

export type RehydrateBsUiModelAction = BsUiModelAction<RehydrateBsUiModelParams>;
export const bsUiModelRehydrateModel = (bsUiModelState: BsUiModelState): RehydrateBsUiModelAction => {
  return {
    type: BSUIMODEL_REHYDRATE,
    payload: {
      newBsUiModelState: bsUiModelState,
    },
  };
};

export type ResetBsUiModelAction = BsUiModelAction<null>;
export const bsUiModelResetModel = (): ResetBsUiModelAction => {
  return {
    type: BSUIMODEL_RESET,
    payload: null,
  };
};
