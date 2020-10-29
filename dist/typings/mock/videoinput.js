var readableConfig = {
    enableAc3: false,
    enableEac3: false,
    enableTrueHdMlp: false,
    enableDts: false,
    enableDtsHd: false,
    maxSampleRate: 0,
    maxChannelCount: 0,
    lockAudioTo: '',
};
var writeableConfig = {
    enableAc3: false,
    enableEac3: false,
    enableTrueHdMlp: false,
    enableDts: false,
    enableDtsHd: false,
    maxSampleRate: 0,
    maxChannelCount: 0,
    lockAudioTo: '',
};
var VideoInput = /** @class */ (function () {
    function VideoInput() {
    }
    VideoInput.prototype.defaultConfig = function () {
        return readableConfig;
    };
    VideoInput.prototype.getConfig = function () {
        return Promise.resolve(writeableConfig);
    };
    VideoInput.prototype.applyConfig = function (config) {
        writeableConfig = config;
        return Promise.resolve({ rebootRequired: false });
    };
    VideoInput.prototype.getStatus = function () {
        return Promise.resolve({
            devicePresent: false,
            width: 1920,
            height: 1080,
            interlaced: false,
            frameRate: 30,
            pixelClock: 0,
            colorSpace: '',
            audioType: '',
            audioSamplingRate: 0,
        });
    };
    return VideoInput;
}());
export default VideoInput;
//# sourceMappingURL=videoinput.js.map