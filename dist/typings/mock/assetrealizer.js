var AssetRealizer = /** @class */ (function () {
    function AssetRealizer(assetPool, path) {
        return;
    }
    AssetRealizer.prototype.estimateRealizedSize = function (assets) {
        return Promise.resolve(2048);
    };
    AssetRealizer.prototype.realize = function (assets) {
        return Promise.resolve({
            name: '',
            ok: true,
            reason: '',
        });
    };
    AssetRealizer.prototype.validateFiles = function (assets, options) {
        return Promise.resolve('');
    };
    return AssetRealizer;
}());
export default AssetRealizer;
//# sourceMappingURL=assetrealizer.js.map