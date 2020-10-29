var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
export var BsUiErrorType;
(function (BsUiErrorType) {
    BsUiErrorType[BsUiErrorType["unknownError"] = 0] = "unknownError";
    BsUiErrorType[BsUiErrorType["unexpectedError"] = 1] = "unexpectedError";
    BsUiErrorType[BsUiErrorType["invalidParameters"] = 2] = "invalidParameters";
    BsUiErrorType[BsUiErrorType["invalidOperation"] = 3] = "invalidOperation";
    BsUiErrorType[BsUiErrorType["apiError"] = 4] = "apiError";
    BsUiErrorType[BsUiErrorType["invalidModel"] = 5] = "invalidModel";
})(BsUiErrorType || (BsUiErrorType = {}));
var bsUiErrorMessage = (_a = {},
    _a[BsUiErrorType.unknownError] = 'Unknown error',
    _a[BsUiErrorType.unexpectedError] = 'Unexpected error',
    _a[BsUiErrorType.invalidParameters] = 'Invalid parameters',
    _a[BsUiErrorType.invalidOperation] = 'Invalid operation attempt',
    _a[BsUiErrorType.apiError] = 'API error',
    _a[BsUiErrorType.invalidModel] = 'Invalid model',
    _a);
var BsUiError = /** @class */ (function (_super) {
    __extends(BsUiError, _super);
    function BsUiError(type, reason) {
        var _this = _super.call(this) || this;
        _this.name = 'BsUiError';
        _this.type = type;
        if (reason) {
            _this.message = bsUiErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsUiErrorMessage[type];
        }
        Object.setPrototypeOf(_this, BsUiError.prototype);
        return _this;
    }
    return BsUiError;
}(Error));
export { BsUiError };
export function isBsUiError(error) {
    return error instanceof BsUiError;
}
//# sourceMappingURL=BsUiError.js.map