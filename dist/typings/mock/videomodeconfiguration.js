var writeableConfig = {
    modeName: '',
    colorSpace: '',
    colorDepth: '',
    frequency: 0,
    dropFrame: false,
    width: 1920,
    height: 1080,
    graphicsPlaneWidth: 1920,
    graphicsPlaneHeight: 1080,
    preferred: false,
    interlaced: false,
    overscan: false,
};
var VideoMode = /** @class */ (function () {
    function VideoMode() {
    }
    VideoMode.prototype.getAvailableModes = function () {
        return Promise.resolve([]);
    };
    VideoMode.prototype.getBestMode = function (connector) {
        return Promise.resolve('');
    };
    VideoMode.prototype.getActiveMode = function () {
        return Promise.resolve({
            modeName: '',
            colorSpace: '',
            colorDepth: '',
            frequency: 0,
            dropFrame: false,
            width: 1920,
            height: 1080,
            graphicsPlaneWidth: 1920,
            graphicsPlaneHeight: 1080,
            preferred: false,
            interlaced: false,
            overscan: false,
        });
    };
    VideoMode.prototype.getConfiguredMode = function () {
        return Promise.resolve(writeableConfig);
    };
    VideoMode.prototype.setMode = function (mode) {
        writeableConfig = mode;
        return Promise.resolve({ restartRequired: false });
    };
    return VideoMode;
}());
export default VideoMode;
//# sourceMappingURL=videomodeconfiguration.js.map