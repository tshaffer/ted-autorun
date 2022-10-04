/** @module Model:base */

import {
  Action,
  Dispatch,
  ActionCreator,
} from 'redux';
import { 
  AutorunPlayerState,
  BsUiModelState,
 } from '../type';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export const BSUIMODEL_BATCH = 'BSUIMODEL_BATCH';

/** @internal */
/** @private */
export const BSUIMODEL_REHYDRATE = 'BSUIMODEL_REHYDRATE';

/** @internal */
/** @private */
export const BSUIMODEL_RESET = 'BSUIMODEL_RESET';

/** @internal */
/** @private */
export type BsUiModelDispatch = Dispatch<any>;

/** @internal */
/** @private */
export interface BsUiModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload: {};
  error?: boolean;
  meta?: {};
}

/** @internal */
/** @private */
export interface BsUiModelAction<T> extends BsUiModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

/** @internal */
/** @private */
export type BsUiModelActionCreator<T> = ActionCreator<BsUiModelAction<T>>;

/** @internal */
/** @private */
export type BsUiModelThunkAction<T> = (
  dispatch: BsUiModelDispatch,
  getState: () => BsUiModelState,
  extraArgument: undefined,
) => T;

/** @internal */
/** @private */
export const bsUiModelBatchAction = (action: BsUiModelBaseAction[]): BsUiModelBatchAction => {
  return {type: BSUIMODEL_BATCH, payload: action};
};

/** @internal */
/** @private */
export interface BsUiModelBatchAction extends Action {
  type: string;
  payload: BsUiModelBaseAction[];
}

/** @internal */
/** @private */
export interface RehydrateBsUiModelParams {
  newBsUiModelState: BsUiModelState;
}

/** @internal */
/** @private */
export type RehydrateBsUiModelAction = BsUiModelAction<RehydrateBsUiModelParams>;
export const bsUiModelRehydrateModel = (bsUiModelState: BsUiModelState): RehydrateBsUiModelAction => {
  return {
    type: BSUIMODEL_REHYDRATE,
    payload: {
      newBsUiModelState: bsUiModelState,
    },
  };
};

/** @internal */
/** @private */
export type ResetBsUiModelAction = BsUiModelAction<null>;
export const bsUiModelResetModel = (): ResetBsUiModelAction => {
  return {
    type: BSUIMODEL_RESET,
    payload: null,
  };
};

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export interface AutorunModelBaseAction extends Action {
  type: string;   // override Any - must be a string
  payload?: {} | null;
  error?: boolean;
  meta?: {};
}

/** @internal */
/** @private */
export interface AutorunModelAction<T> extends AutorunModelBaseAction {
  payload: T;     // override payload with specific parameter type
}

/** @internal */
/** @private */
export type AutorunModelActionCreator<T> = ActionCreator<AutorunModelAction<T>>;
export type AutorunModelThunkAction<T> = (
  dispatch: AutorunDispatch,
  getState: () => AutorunPlayerState,
  extraArgument: undefined,
) => T;

export interface AutorunBaseAction extends Action {
  type: string;
  payload: {} | null;
  error?: boolean;
  meta?: {};
}

export interface AutorunAction<T> extends AutorunBaseAction {
  payload: T;
}

// export type AutorunDispatch = Dispatch<AutorunState>;
export type AutorunDispatch = Dispatch<any>;
export type AutorunVoidThunkAction = any;
// (dispatch: AutorunDispatch, getState: () => BaApUiState, extraArgument: undefined) => void;
export type AutorunStringThunkAction = any;
// (dispatch: AutorunDispatch, getState: () => BaApUiState, extraArgument: undefined) => string;
export type AutorunVoidPromiseThunkAction = any;
// (dispatch: AutorunDispatch, getState: () => BaApUiState, extraArgument: undefined) => Promise<void>;
export type AutorunThunkAction<T> = any;
// (dispatch: AutorunDispatch, getState: () => BaApUiState, extraArgument: undefined) => AutorunAction<T>;
export type AutorunAnyPromiseThunkAction = any;
// (dispatch: AutorunDispatch, getState: () => BaApUiState, extraArgument: undefined) => Promise<any>;

export type AutorunActionCreator<T> = ActionCreator<AutorunAction<T>>;

export interface AutorunModelBatchAction extends Action {
  type: string;
  payload: AutorunBaseAction[];
}
