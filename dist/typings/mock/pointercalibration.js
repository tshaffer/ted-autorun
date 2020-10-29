var PointerCalibration = /** @class */ (function () {
    function PointerCalibration() {
    }
    PointerCalibration.prototype.startCalibration = function () {
        return Promise.resolve();
    };
    PointerCalibration.prototype.getCalibrationStatus = function () {
        return Promise.resolve(0);
    };
    PointerCalibration.prototype.setCalibrationRanges = function (xMin, xMax, yMin, yMax) {
        return Promise.resolve();
    };
    PointerCalibration.prototype.clearStoredCalibration = function () {
        return Promise.resolve(true);
    };
    PointerCalibration.prototype.isCalibrated = function () {
        return Promise.resolve(true);
    };
    PointerCalibration.prototype.getDiagnosticInfoHTML = function (deviceInfo, events) {
        return Promise.resolve('');
    };
    PointerCalibration.prototype.startEventLogging = function () {
        return Promise.resolve();
    };
    PointerCalibration.prototype.stopEventLogging = function () {
        return Promise.resolve();
    };
    return PointerCalibration;
}());
export default PointerCalibration;
//# sourceMappingURL=pointercalibration.js.map