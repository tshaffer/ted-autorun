/** @module Selector:templateProperty */

import { createSelector } from 'reselect';
import { BsColor } from '@brightsign/bscore';
import { BsUiError, BsUiErrorType } from '../utility/BsUiError';
import {
  BsUiModelState,
  BsUiModelTemplateState,
  BsUiModelTemplatePropertyState,
 } from '../type';
import { isValidTemplatePropertyStateShallow } from '../model';
import { bsUiModelGetTemplateState } from './template';

export const bsUiModelGetTemplatePropertyState = (state: BsUiModelState): BsUiModelTemplatePropertyState => {
  return getTemplatePropertyState(state);
};

const getTemplatePropertyState = createSelector<
  BsUiModelState,
  BsUiModelTemplatePropertyState,
  BsUiModelTemplateState
>(
  bsUiModelGetTemplateState,
  (state: BsUiModelTemplateState): BsUiModelTemplatePropertyState => {
    if (isValidTemplatePropertyStateShallow(state.property)) {
      return state.property;
    } else {
      const exceptionMessage = `state must be of type BsUiModelState or
        have a field bsuimodel of type BsUiModelState. invalid state.template.property
        ${JSON.stringify(state.property)}`;
      throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
    }
  },
);

export const bsUiModelGetTemplatePropertyColorState = (state: BsUiModelState): BsColor => {
  return getTemplatePropertyColor(state);
};

const getTemplatePropertyColor = createSelector<
  BsUiModelState,
  BsColor,
  BsUiModelTemplatePropertyState
>(
  bsUiModelGetTemplatePropertyState,
  (state: BsUiModelTemplatePropertyState): BsColor => {
    return state.color;
  },
);
