var StorageInfo = /** @class */ (function () {
    function StorageInfo(path) {
        return;
    }
    StorageInfo.prototype.isReadOnly = function () {
        return Promise.resolve(false);
    };
    StorageInfo.prototype.getFilesystemType = function () {
        return Promise.resolve('');
    };
    StorageInfo.prototype.getStatistics = function () {
        return Promise.resolve({
            blockSize: 0,
            bytesFree: 2048,
            sizeBytes: 2048,
            filesFree: 2048,
            filesUsed: 0,
            isReadOnly: false,
        });
    };
    return StorageInfo;
}());
export default StorageInfo;
//# sourceMappingURL=filesysteminfo.js.map