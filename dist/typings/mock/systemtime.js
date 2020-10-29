// let writeableDate = new Date();
var SystemTime = /** @class */ (function () {
    function SystemTime() {
    }
    SystemTime.prototype.setDate = function (date) {
        // writeableDate = date;
        return Promise.resolve();
    };
    SystemTime.prototype.setTimeZone = function (timezoneString) {
        return Promise.resolve();
    };
    SystemTime.prototype.lastNetworkTimeResult = function () {
        return {
            successTimestamp: 0,
            attemptTimestamp: 0,
            failureReason: '',
        };
    };
    return SystemTime;
}());
export default SystemTime;
//# sourceMappingURL=systemtime.js.map