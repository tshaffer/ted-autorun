/** @module Model:base */
// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------
/** @internal */
/** @private */
export var BSUIMODEL_BATCH = 'BSUIMODEL_BATCH';
/** @internal */
/** @private */
export var BSUIMODEL_REHYDRATE = 'BSUIMODEL_REHYDRATE';
/** @internal */
/** @private */
export var BSUIMODEL_RESET = 'BSUIMODEL_RESET';
/** @internal */
/** @private */
export var bsUiModelBatchAction = function (action) {
    return { type: BSUIMODEL_BATCH, payload: action };
};
export var bsUiModelRehydrateModel = function (bsUiModelState) {
    return {
        type: BSUIMODEL_REHYDRATE,
        payload: {
            newBsUiModelState: bsUiModelState,
        },
    };
};
export var bsUiModelResetModel = function () {
    return {
        type: BSUIMODEL_RESET,
        payload: null,
    };
};
//# sourceMappingURL=baseAction.js.map