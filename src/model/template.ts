/** @module Model:template */

import { combineReducers } from 'redux';
import { isObject } from 'lodash';
import { BsUiModelTemplateState } from '../type';
import property, { isValidTemplatePropertyState } from './templateProperty';

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

export default combineReducers<BsUiModelTemplateState>({
  property,
});

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
