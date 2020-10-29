import { 
// BsUiModelState,
createBsColor, } from '../type';
import { 
// BsUiModelThunkAction,
// BsUiModelBatchAction,
// BsUiModelDispatch,
bsUiModelBatchAction, bsUiModelUpdateTemplateColor, } from '../model';
// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var doAsync = function () {
    return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
};
// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var updateTemplateColorAsync = function () {
    return function (dispatch) {
        return doAsync()
            .then(function () {
            var r = getRandomInt(0, 255);
            var g = getRandomInt(0, 255);
            var b = getRandomInt(0, 255);
            var a = getRandomInt(0, 255);
            var color = createBsColor(r, g, b, a);
            return dispatch(bsUiModelUpdateTemplateColor(color));
        });
    };
};
/** @internal */
/** @private */
export var updateTemplateColorBatch = function () {
    return function (dispatch) {
        var batchActions = [];
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        var a = getRandomInt(0, 255);
        var color = createBsColor(r, g, b, a);
        batchActions.push(bsUiModelUpdateTemplateColor(color));
        return dispatch(bsUiModelBatchAction(batchActions));
    };
};
//# sourceMappingURL=template.js.map