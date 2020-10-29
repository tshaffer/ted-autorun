var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.isAttached = function () {
        return Promise.resolve(false);
    };
    Keyboard.prototype.setLayout = function (layoutName) {
        return Promise.resolve();
    };
    return Keyboard;
}());
export default Keyboard;
//# sourceMappingURL=keyboard.js.map