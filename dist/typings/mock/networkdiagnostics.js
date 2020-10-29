var NetworkDiagnostics = /** @class */ (function () {
    function NetworkDiagnostics() {
    }
    NetworkDiagnostics.prototype.testInternetConnectivity = function () {
        return Promise.resolve({
            diagnosis: '',
            ok: true,
            log: []
        });
    };
    NetworkDiagnostics.prototype.testNetworkInterface = function (interfaceName) {
        return Promise.resolve({
            diagnosis: '',
            ok: true,
            log: []
        });
    };
    return NetworkDiagnostics;
}());
export default NetworkDiagnostics;
//# sourceMappingURL=networkdiagnostics.js.map