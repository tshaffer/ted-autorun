var AssetPool = /** @class */ (function () {
    function AssetPool(path) {
        return;
    }
    AssetPool.prototype.protectAssets = function (name, assets) {
        return Promise.resolve();
    };
    AssetPool.prototype.unprotectAssets = function (name) {
        return Promise.resolve();
    };
    AssetPool.prototype.reserveStorage = function (size) {
        return Promise.resolve();
    };
    AssetPool.prototype.setMaximumPoolSize = function (size) {
        return Promise.resolve();
    };
    AssetPool.prototype.getPoolSize = function () {
        return Promise.resolve(2048);
    };
    AssetPool.prototype.validate = function (assets, options) {
        return Promise.resolve({
            name: '',
            ok: true,
            reason: '',
        });
    };
    AssetPool.prototype.queryFiles = function (assets) {
        return Promise.resolve({
            name: '',
            present: true,
        });
    };
    AssetPool.prototype.areAssetsReady = function (assets) {
        return Promise.resolve(true);
    };
    return AssetPool;
}());
export default AssetPool;
//# sourceMappingURL=assetpool.js.map