var StorageInfo = /** @class */ (function () {
    function StorageInfo(path) {
        return;
    }
    StorageInfo.prototype.getDeviceSize = function () {
        return Promise.resolve(2048);
    };
    StorageInfo.prototype.getDeviceInfo = function () {
        return Promise.resolve({ size: 2048 });
    };
    return StorageInfo;
}());
export default StorageInfo;
//# sourceMappingURL=storageinfo.js.map