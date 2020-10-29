/** @module Model:templateProperty */
import { isNumber, isNil, } from 'lodash';
import { BsUiError, BsUiErrorType } from '../utility/BsUiError';
import { BSUIMODEL_REHYDRATE, BSUIMODEL_RESET } from './baseAction';
// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var BSUIMODEL_UPDATE_TEMPLATE_PROPERTY = 'BSUIMODEL_UPDATE_TEMPLATE_PROPERTY';
/** @internal */
/** @private */
export var BSUIMODEL_RESET_TEMPLATE_PROPERTY = 'BSUIMODEL_RESET_TEMPLATE_PROPERTY';
/** @internal */
/** @private */
export var bsUiModelResetTemplateProperty = function () {
    return {
        type: BSUIMODEL_RESET_TEMPLATE_PROPERTY,
        payload: null,
    };
};
/** @internal */
/** @private */
export var bsUiModelUpdateTemplateColor = function (color) {
    if (!isValidColor(color)) {
        var errorMessage = "invalid color " + JSON.stringify(color);
        throw new BsUiError(BsUiErrorType.invalidParameters, errorMessage);
    }
    return {
        type: BSUIMODEL_UPDATE_TEMPLATE_PROPERTY,
        payload: {
            color: color,
        },
    };
};
// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var templatePropertyDefault = {
    color: { a: 255, r: 0, g: 0, b: 0 }
};
Object.freeze(templatePropertyDefault);
// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var templatePropertyReducer = function (state, _a) {
    if (state === void 0) { state = templatePropertyDefault; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case BSUIMODEL_REHYDRATE:
        case BSUIMODEL_RESET:
        case BSUIMODEL_RESET_TEMPLATE_PROPERTY: {
            return templatePropertyDefault;
        }
        case BSUIMODEL_UPDATE_TEMPLATE_PROPERTY: {
            return Object.assign({}, state, payload);
        }
        default:
            return state;
    }
};
// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var isValidColor = function (state) {
    return !isNil(state)
        && isNumber(state.r) && state.r >= 0 && state.r <= 255
        && isNumber(state.g) && state.g >= 0 && state.g <= 255
        && isNumber(state.b) && state.b >= 0 && state.b <= 255
        && isNumber(state.a) && state.a >= 0 && state.a <= 255;
};
/** @internal */
/** @private */
export var isValidTemplatePropertyState = function (state) {
    return !isNil(state)
        && state.hasOwnProperty('color') && isValidColor(state.color);
};
/** @internal */
/** @private */
export var isValidTemplatePropertyStateShallow = function (state) {
    return !isNil(state)
        && state.hasOwnProperty('color');
};
//# sourceMappingURL=templateProperty.js.map