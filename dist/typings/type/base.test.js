import * as base from './base';
describe('base - type', function () {
    var testStateOne = {
        template: {
            property: {
                color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                }
            }
        }
    };
    it('should create base state', function () {
        expect(base.createModel(testStateOne.template)).toMatchObject(testStateOne);
    });
});
//# sourceMappingURL=base.test.js.map