/** @module Types:template */

import { BsUiModelTemplatePropertyState } from './templateProperty';

export interface BsUiModelTemplateState {
  readonly property: BsUiModelTemplatePropertyState;
}

export const createTemplate = (property: BsUiModelTemplatePropertyState): BsUiModelTemplateState => {
  return {
    property
  };
};
