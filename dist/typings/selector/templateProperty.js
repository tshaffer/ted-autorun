/** @module Selector:templateProperty */
import { createSelector } from 'reselect';
import { BsUiError, BsUiErrorType } from '../utility/BsUiError';
import { isValidTemplatePropertyStateShallow } from '../model';
import { bsUiModelGetTemplateState } from './template';
/** @internal */
/** @private */
export var bsUiModelGetTemplatePropertyState = function (state) {
    return getTemplatePropertyState(state);
};
var getTemplatePropertyState = createSelector(bsUiModelGetTemplateState, function (state) {
    if (isValidTemplatePropertyStateShallow(state.property)) {
        return state.property;
    }
    else {
        var exceptionMessage = "state must be of type BsUiModelState or\n        have a field bsuimodel of type BsUiModelState. invalid state.template.property\n        " + JSON.stringify(state.property);
        throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
    }
});
/** @internal */
/** @private */
export var bsUiModelGetTemplatePropertyColorState = function (state) {
    return getTemplatePropertyColor(state);
};
var getTemplatePropertyColor = createSelector(bsUiModelGetTemplatePropertyState, function (state) {
    return state.color;
});
//# sourceMappingURL=templateProperty.js.map