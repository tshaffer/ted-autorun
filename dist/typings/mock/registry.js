var Registry = /** @class */ (function () {
    function Registry() {
    }
    Registry.prototype.read = function (sectionName, key) {
        return Promise.resolve({});
    };
    Registry.prototype.write = function (sectionName, key, value) {
        return Promise.resolve();
    };
    return Registry;
}());
export default Registry;
//# sourceMappingURL=registry.js.map