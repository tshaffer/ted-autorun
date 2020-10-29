var KeyStore = /** @class */ (function () {
    function KeyStore() {
    }
    KeyStore.prototype.addCaCertificate = function (filename) {
        return Promise.resolve();
    };
    KeyStore.prototype.addCaPackage = function (filename) {
        return Promise.resolve();
    };
    KeyStore.prototype.addClientCertificate = function (object) {
        return Promise.resolve();
    };
    KeyStore.prototype.removeCaPackage = function (filename) {
        return Promise.resolve();
    };
    KeyStore.prototype.getCaPackagesInstalled = function () {
        return Promise.resolve([]);
    };
    return KeyStore;
}());
export default KeyStore;
//# sourceMappingURL=keystore.js.map