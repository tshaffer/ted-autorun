/** @module Selector:base */
import { isValidBsUiModelStateShallow } from '../model';
import { BsUiError, BsUiErrorType, } from '../utility/BsUiError';
/** @internal */
/** @private */
export var bsUiModelFilterBaseState = function (state) {
    if (state.hasOwnProperty('bsuimodel') && isValidBsUiModelStateShallow(state.bsuimodel)) {
        return state.bsuimodel;
    }
    else if (isValidBsUiModelStateShallow(state)) {
        return state;
    }
    else {
        var exceptionMessage = "state must be of type BsUiModelState or have a field bsuimodel\n      of type BsUiModelState. invalid state " + JSON.stringify(state);
        throw new BsUiError(BsUiErrorType.invalidParameters, exceptionMessage);
    }
};
/** @internal */
/** @private */
export var bsUiModelGetBaseState = function (state) {
    return bsUiModelFilterBaseState(state);
};
//# sourceMappingURL=base.js.map