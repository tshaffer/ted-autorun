var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var readableBaseConfig = {
    metric: 0,
    dnsServerList: [],
    ipAddressList: [],
    enabledProtocolList: [],
    inboundShaperRate: 0,
    mtu: 0,
    clientIdentifier: '',
    domain: '',
};
var writeableBaseConfig = {
    metric: 0,
    dnsServerList: [],
    ipAddressList: [],
    enabledProtocolList: [],
    inboundShaperRate: 0,
    mtu: 0,
    clientIdentifier: '',
    domain: '',
};
var readableWifiConfig = __assign(__assign({}, writeableBaseConfig), { essId: '', passphrase: '', obfuscatedPassphrase: '', country: '', securityMode: '', identity: '', eapTlsOptions: '', caCertificates: '', clientCertificate: '', privateKey: '' });
var readableEthernetConfig = __assign(__assign({}, writeableBaseConfig), { securityMode: '', identity: '', eapTlsOptions: '', caCertificates: '', clientCertificate: '', privateKey: '' });
var readableModemConfig = __assign(__assign({}, writeableBaseConfig), { user: '', password: '', number: '', initString: '' });
var NetworkConfiguration = /** @class */ (function () {
    function NetworkConfiguration(type) {
        this.type = type;
    }
    NetworkConfiguration.prototype.defaultConfig = function () {
        return readableBaseConfig;
    };
    NetworkConfiguration.prototype.getConfig = function () {
        if (this.type === 'ppp0') {
            return Promise.resolve(readableModemConfig);
        }
        else if (this.type === 'wlan0') {
            return Promise.resolve(readableWifiConfig);
        }
        else {
            return Promise.resolve(readableEthernetConfig);
        }
    };
    NetworkConfiguration.prototype.applyConfig = function (config) {
        writeableBaseConfig = config;
        if (this.type === 'ppp0') {
            readableModemConfig = __assign(__assign({}, readableModemConfig), writeableBaseConfig);
            return Promise.resolve();
        }
        else if (this.type === 'wlan0') {
            readableWifiConfig = __assign(__assign({}, readableWifiConfig), writeableBaseConfig);
            return Promise.resolve();
        }
        else {
            readableEthernetConfig = __assign(__assign({}, readableEthernetConfig), writeableBaseConfig);
            return Promise.resolve();
        }
    };
    NetworkConfiguration.prototype.getNeighborInformation = function () {
        return Promise.resolve({});
    };
    NetworkConfiguration.prototype.enableLeds = function () {
        return Promise.resolve();
    };
    NetworkConfiguration.prototype.scan = function () {
        return Promise.resolve({
            essId: readableWifiConfig.essId,
            bssId: '',
            signal: 0,
        });
    };
    return NetworkConfiguration;
}());
export default NetworkConfiguration;
//# sourceMappingURL=networkconfiguration.js.map