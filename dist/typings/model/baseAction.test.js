import * as base from './baseAction';
describe('base - action creator', function () {
    var testState = {
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
    it('should create a base batch action', function () {
        expect(base.bsUiModelBatchAction([])).toMatchObject({ type: base.BSUIMODEL_BATCH, payload: [] });
    });
    it('should create a base rehydrate action', function () {
        expect(base.bsUiModelRehydrateModel(testState))
            .toMatchObject({ type: base.BSUIMODEL_REHYDRATE, payload: { newBsUiModelState: testState } });
    });
    it('should create a base reset action', function () {
        expect(base.bsUiModelResetModel()).toMatchObject({ type: base.BSUIMODEL_RESET, payload: null });
    });
});
//# sourceMappingURL=baseAction.test.js.map