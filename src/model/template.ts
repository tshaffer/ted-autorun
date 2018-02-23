/** @module Model:template */

import { combineReducers } from 'redux';
import { isObject } from 'lodash';
import { BsUiModelTemplateState } from '../type';
import { BsUiModelBatchAction } from './baseAction';
import {
  templatePropertyReducer,
  isValidTemplatePropertyState,
} from './templateProperty';

// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------

export const templateReducer = combineReducers<BsUiModelTemplateState>({
  property: templatePropertyReducer,
}) as (state: BsUiModelTemplateState, action: BsUiModelBatchAction) => BsUiModelTemplateState;

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------

export const isValidTemplateState = (state: any): boolean => {
  return isObject(state)
    && state.hasOwnProperty('property') && isValidTemplatePropertyState(state.property);
};

export const isValidTemplateStateShallow = (state: any): boolean => {
  return isObject(state)
    && state.hasOwnProperty('property');
};
