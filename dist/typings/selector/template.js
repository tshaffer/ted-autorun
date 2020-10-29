/** @module Selector:template */
import { createSelector } from 'reselect';
import { BsUiError, BsUiErrorType, } from '../utility/BsUiError';
import { isValidTemplateStateShallow } from '../model';
import { bsUiModelGetBaseState } from './base';
/** @internal */
/** @private */
export var bsUiModelGetTemplateState = function (state) {
    return getTemplateState(state);
};
var getTemplateState = createSelector(bsUiModelGetBaseState, function (state) {
    if (isValidTemplateStateShallow(state.template)) {
        return state.template;
    }
    else {
        var exceptionMessage = "state must be of type BsUiModelState or\n        have a field bsuimodel of type BsUiModelState. invalid state.template\n        " + JSON.stringify(state.template);
        throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
    }
});
//# sourceMappingURL=template.js.map