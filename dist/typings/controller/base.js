import { createModel, createTemplate, createTemplateProperty, createBsColor, } from '../type';
import { 
// BsUiModelAction,
// BsUiModelThunkAction,
// BsUiModelDispatch,
bsUiModelRehydrateModel, bsUiModelResetModel, } from '../model';
// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------
var fetchModelAsync = function () {
    return new Promise(function (resolve) {
        var color = createBsColor(255, 0, 0, 0);
        var templateProperty = createTemplateProperty(color);
        var template = createTemplate(templateProperty);
        var model = createModel(template);
        resolve(model);
    });
};
// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------
export var initModel = function () {
    return function (dispatch) {
        return fetchModelAsync()
            .then(function (model) { return dispatch(bsUiModelRehydrateModel(model)); });
    };
};
export var resetModel = function () {
    return function (dispatch) {
        return dispatch(bsUiModelResetModel());
    };
};
//# sourceMappingURL=base.js.map