/** @module Model:template */
import { combineReducers } from 'redux';
import { isNil } from 'lodash';
import { templatePropertyReducer, isValidTemplatePropertyState, } from './templateProperty';
// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------
// none
// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------
// none
// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var templateReducer = combineReducers({
    property: templatePropertyReducer,
});
// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var isValidTemplateState = function (state) {
    return !isNil(state)
        && state.hasOwnProperty('property') && isValidTemplatePropertyState(state.property);
};
/** @internal */
/** @private */
export var isValidTemplateStateShallow = function (state) {
    return !isNil(state)
        && state.hasOwnProperty('property');
};
//# sourceMappingURL=template.js.map