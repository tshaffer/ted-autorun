/** @module Model:base */
import { combineReducers } from 'redux';
import { isNil } from 'lodash';
import { BSUIMODEL_BATCH, } from './baseAction';
import { templateReducer, isValidTemplateState, } from './template';
var enableBatching = function (reduce) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case BSUIMODEL_BATCH:
                return action.payload.reduce(batchingReducer, state);
            default:
                return reduce(state, action);
        }
    };
};
export var bsUiModelReducer = enableBatching(combineReducers({
    template: templateReducer,
}));
// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
export var isValidBsUiModelState = function (state) {
    return !isNil(state)
        && state.hasOwnProperty('template') && isValidTemplateState(state.template);
};
export var isValidBsUiModelStateShallow = function (state) {
    return !isNil(state)
        && state.hasOwnProperty('template');
};
//# sourceMappingURL=baseReducer.js.map