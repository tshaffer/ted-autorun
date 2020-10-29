import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { bsUiModelReducer } from '../model';
import * as base from './base';
describe('base - controller', function () {
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
    it('should initialize store', function () {
        expect(store.getState()).toMatchObject(testState);
    });
    it('should manually initialize store', function () {
        store.dispatch(base.initModel());
        expect(store.getState()).toMatchObject(testState);
    });
    it('should manually reset store', function () {
        store.dispatch(base.resetModel());
        expect(store.getState()).toMatchObject(testState);
    });
});
//# sourceMappingURL=base.test.js.map