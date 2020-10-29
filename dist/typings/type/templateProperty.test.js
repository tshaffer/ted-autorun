import * as templateProperty from './templateProperty';
describe('templateProperty - type', function () {
    var testStateOne = {
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        }
    };
    it('should create template property state', function () {
        expect(templateProperty.createTemplateProperty(testStateOne.color)).toMatchObject(testStateOne);
    });
    it('should create template property color state', function () {
        var _a = testStateOne.color, r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        expect(templateProperty.createBsColor(r, g, b, a)).toMatchObject(testStateOne.color);
    });
});
//# sourceMappingURL=templateProperty.test.js.map