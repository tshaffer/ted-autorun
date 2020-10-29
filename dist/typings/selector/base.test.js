import * as base from './base';
describe('base - selector', function () {
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
    var testStateTwo = {
        bsuimodel: {
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
        }
    };
    it('should retrieve valid base state or throw error', function () {
        expect(base.bsUiModelFilterBaseState(testStateOne)).toMatchObject(testStateOne);
        expect(base.bsUiModelFilterBaseState(testStateTwo)).toMatchObject(testStateTwo.bsuimodel);
        expect(base.bsUiModelFilterBaseState.bind(null, {})).toThrowError();
        expect(base.bsUiModelFilterBaseState.bind(null, null)).toThrowError();
        expect(base.bsUiModelFilterBaseState.bind(null, undefined)).toThrowError();
        expect(base.bsUiModelFilterBaseState.bind(null, 0)).toThrowError();
        expect(base.bsUiModelFilterBaseState.bind(null, true)).toThrowError();
        expect(base.bsUiModelFilterBaseState.bind(null, 'string')).toThrowError();
    });
    it('should retrieve base state', function () {
        expect(base.bsUiModelGetBaseState(testStateOne)).toMatchObject(testStateOne);
    });
});
//# sourceMappingURL=base.test.js.map