var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Template, TemplateComponent } from './Template';
import { bsUiModelReducer } from '../model';
import { createBsColor, } from '../type';
describe('Template - shallow component render without store', function () {
    var component = null;
    beforeEach(function () {
        var color = createBsColor(0, 0, 0, 255);
        var props = {
            color: color,
            onInitModel: function () { return null; },
            onResetModel: function () { return null; },
            onUpdateTemplateColorAsync: function () { return null; },
            onUpdateTemplateColorBatch: function () { return null; },
        };
        component = render(React.createElement(TemplateComponent, __assign({}, props)));
    });
    it('should render two buttons', function () {
        expect(component.find('input[type="button"]').length).toBe(2);
    });
});
describe('Template - integrated component render with store', function () {
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
    var component = null;
    beforeEach(function () {
        store = createStore(bsUiModelReducer, applyMiddleware(thunk));
        component = render(React.createElement(Provider, { store: store },
            React.createElement(Template, null)));
    });
    it('should render two buttons', function () {
        expect(component.find('input[type="button"]').length).toBe(2);
    });
    it('should receive color props', function () {
        expect(component.find(TemplateComponent).props().color).toMatchObject(testState.template.property.color);
    });
    it('should receive dispatch props properly', function () {
        expect(typeof component.find(TemplateComponent).props().onInitModel).toBe('function');
        expect(typeof component.find(TemplateComponent).props().onResetModel).toBe('function');
        expect(typeof component.find(TemplateComponent).props().onUpdateTemplateColorAsync).toBe('function');
        expect(typeof component.find(TemplateComponent).props().onUpdateTemplateColorBatch).toBe('function');
    });
    it('clicking update batch button should update color props', function () {
        expect(component.find(TemplateComponent).props().color).toMatchObject(testState.template.property.color);
        component.find('input[value="Update Color Batch"]').simulate('click');
        expect(component.find(TemplateComponent).props().color).not.toMatchObject(testState.template.property.color);
    });
});
//# sourceMappingURL=Template.test.js.map