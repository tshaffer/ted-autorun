import * as template from './template';
describe('template - selectors', function () {
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
    it('should retrieve template state', function () {
        expect(template.bsUiModelGetTemplateState(testStateOne)).toMatchObject(testStateOne.template);
        expect(template.bsUiModelGetTemplateState.bind(null, {})).toThrowError();
        expect(template.bsUiModelGetTemplateState.bind(null, null)).toThrowError();
        expect(template.bsUiModelGetTemplateState.bind(null, undefined)).toThrowError();
        expect(template.bsUiModelGetTemplateState.bind(null, 0)).toThrowError();
        expect(template.bsUiModelGetTemplateState.bind(null, true)).toThrowError();
        expect(template.bsUiModelGetTemplateState.bind(null, 'string')).toThrowError();
    });
});
//# sourceMappingURL=template.test.js.map