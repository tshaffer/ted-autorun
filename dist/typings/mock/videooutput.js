// let writableColorProperties = {
//   constrast: 0,
//   saturation: 0,
//   hue: 0,
//   brightness: 0,
// };
var VideoOutput = /** @class */ (function () {
    function VideoOutput(interfaceName) {
        this.type = interfaceName;
        return;
    }
    VideoOutput.prototype.getVideoResolution = function () {
        return Promise.resolve({ height: 1080, width: 1920 });
    };
    VideoOutput.prototype.getGraphicsResolution = function () {
        return Promise.resolve({ height: 1080, width: 1920 });
    };
    VideoOutput.prototype.getOutputResolution = function () {
        return Promise.resolve({ height: 1080, width: 1920 });
    };
    VideoOutput.prototype.adjustGraphicsColor = function (colorProperties) {
        // writableColorProperties = colorProperties;
        return Promise.resolve();
    };
    VideoOutput.prototype.getEdidIdentity = function () {
        return Promise.resolve({
            manufacturer: '',
            product: 0,
            serialNumber: 0,
            weekOfManufacture: 0,
            yearOfManufacture: 0,
            monitorName: '',
            textString: '',
            serialNumberString: '',
            bt2020RgbSupport: false,
            bt2020YccSupport: false,
            sdrEotfSupport: false,
            hdrEotfSupport: false,
            hdrSt2084Support: false,
            unstable: false,
        });
    };
    VideoOutput.prototype.getEdid = function () {
        return Promise.resolve('');
    };
    VideoOutput.prototype.setMultiScreenBezel = function (xPercentage, yPercentage) {
        return Promise.resolve();
    };
    VideoOutput.prototype.setBackgroundColor = function (color) {
        return Promise.resolve();
    };
    VideoOutput.prototype.setPowerSaveMode = function (enable) {
        return Promise.resolve();
    };
    VideoOutput.prototype.set3dMode = function (mode) {
        return Promise.resolve();
    };
    VideoOutput.prototype.setSyncDomain = function (domain) {
        return Promise.resolve();
    };
    VideoOutput.prototype.isAttached = function () {
        return Promise.resolve(true);
    };
    VideoOutput.prototype.getOutputStatus = function () {
        return Promise.resolve({
            outputPresent: false,
            outputPowered: false,
            unstable: false,
            audioFormat: '',
            audioSampleRate: 0,
            audioBitsPerSample: 0,
            audioChannelCount: 0,
            eotf: '',
        });
    };
    VideoOutput.prototype.disableAudio = function (disable) {
        return Promise.resolve();
    };
    VideoOutput.prototype.getTxHdcpStatus = function () {
        return Promise.resolve({ state: '' });
    };
    VideoOutput.prototype.forceHdcpOn = function (forceHdcpOn) {
        return Promise.resolve();
    };
    return VideoOutput;
}());
export default VideoOutput;
//# sourceMappingURL=videooutput.js.map