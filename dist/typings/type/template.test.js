import * as template from './template';
describe('template - type', function () {
    var testStateOne = {
        property: {
            color: {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            }
        }
    };
    it('should create template state', function () {
        expect(template.createTemplate(testStateOne.property)).toMatchObject(testStateOne);
    });
});
//# sourceMappingURL=template.test.js.map