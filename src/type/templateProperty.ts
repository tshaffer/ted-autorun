/** @module Types:templateProperties */

import { BsColor } from '@brightsign/bscore';

export interface BsUiModelTemplatePropertyState {
  color: BsColor;
}

export const createTemplateProperty = (color: BsColor): BsUiModelTemplatePropertyState => {
  return {
    color
  };
};

export const createBsColor = (r: number, g: number, b: number, a: number): BsColor => {
  return {
    r,
    g,
    b,
    a
  };
};
