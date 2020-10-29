var readableConfig = {
    port: 0,
    password: {
        value: '',
        obfuscated: false,
    },
    authenticationList: [],
};
// let writeableConfig = {
//   password: {
//     value: '',
//     obfuscated: false,
//   },
// };
var DWSConfiguration = /** @class */ (function () {
    function DWSConfiguration() {
    }
    DWSConfiguration.prototype.defaultConfig = function () {
        return readableConfig;
    };
    DWSConfiguration.prototype.getConfig = function () {
        return Promise.resolve(readableConfig);
    };
    DWSConfiguration.prototype.applyConfig = function (config) {
        // writeableConfig = config;
        return Promise.resolve({ restartRequired: true });
    };
    return DWSConfiguration;
}());
export default DWSConfiguration;
//# sourceMappingURL=dwsconfiguration.js.map