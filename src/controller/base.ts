import {
  BsUiModelState,
  createModel,
  createTemplate,
  createTemplateProperty,
  createBsColor,
} from '../type';
import {
  // BsUiModelAction,
  // BsUiModelThunkAction,
  // BsUiModelDispatch,
  bsUiModelRehydrateModel,
  bsUiModelResetModel,
} from '../model';

// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------

const fetchModelAsync = (): Promise<BsUiModelState> => {
  return new Promise((resolve) => {
    const color = createBsColor(255, 0, 0, 0);
    const templateProperty = createTemplateProperty(color);
    const template = createTemplate(templateProperty);
    const model = createModel(template);
    resolve(model);
  });
};

// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------

export const initModel = () => {
  return (dispatch: any) => {
    return fetchModelAsync()
      .then((model) => dispatch(bsUiModelRehydrateModel(model)));
  };
};

export const resetModel = () => {
  return (dispatch: any) => {
    return dispatch(bsUiModelResetModel());
  };
};
