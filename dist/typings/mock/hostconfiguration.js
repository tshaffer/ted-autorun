var readableConfig = {
    loginPassword: true,
    obfuscatedLoginPassword: true,
    proxy: '',
    translatedProxy: '',
    proxyBypassList: [],
    timeServerList: ['http://time.brightsignnetwork.com'],
    timeServerInterval: 0,
    hostName: 'myplayer'
};
// let writeableConfig = {
//   loginPassword: '',
//   obfuscatedLoginPassword: '',
//   proxy: '',
//   translatedProxy: '',
//   proxyBypassList: [] as string[],
//   timeServerList: ['http://time.brightsignnetwork.com'],
//   timeServerInterval: 0,
//   hostName: 'myplayer'
// };
var HostConfiguration = /** @class */ (function () {
    function HostConfiguration() {
    }
    HostConfiguration.prototype.defaultConfig = function () {
        return readableConfig;
    };
    HostConfiguration.prototype.getConfig = function () {
        return Promise.resolve(readableConfig);
    };
    HostConfiguration.prototype.applyConfig = function (config) {
        // writeableConfig = config;
        return Promise.resolve();
    };
    return HostConfiguration;
}());
export default HostConfiguration;
//# sourceMappingURL=hostconfiguration.js.map