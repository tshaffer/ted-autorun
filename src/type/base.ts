/** @module Types:base */

import { BsUiModelTemplateState } from './template';

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface BsUiModelState {
  template: BsUiModelTemplateState;
}

export const createModel = (template: BsUiModelTemplateState): BsUiModelState => {
  return {
    template
  };
};
