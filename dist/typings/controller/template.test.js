import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { bsUiModelReducer } from '../model';
import * as template from './template';
describe('template - controller', function () {
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
    var store = null;
    beforeEach(function () {
        store = createStore(bsUiModelReducer, applyMiddleware(thunk));
    });
    it('should update template color async', function () {
        return store.dispatch(template.updateTemplateColorAsync())
            .then(function () {
            expect(store.getState()).not.toMatchObject(testState);
        });
    });
    it('should update template color batch', function () {
        store.dispatch(template.updateTemplateColorBatch());
        expect(store.getState()).not.toMatchObject(testState);
    });
});
//# sourceMappingURL=template.test.js.map