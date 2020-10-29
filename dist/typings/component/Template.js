var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { connect } from 'react-redux';
import { /*Dispatch,*/ bindActionCreators } from 'redux';
import { style } from 'typestyle';
import * as csstips from 'csstips';
import { percent, color, rgba } from 'csx';
import { initModel, resetModel, updateTemplateColorAsync, updateTemplateColorBatch, } from '../controller';
import { bsUiModelGetTemplatePropertyColorState } from '../selector';
import jsAlert from '../asset/someJavaScript';
import VideoInput from '@brightsign/videoinput';
import TemplateAsset from '../asset/TemplateAsset.svg';
// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------
var containerStyle = style(csstips.fillParent, csstips.vertical);
var headerContainerStyle = function () { return style({
    backgroundColor: 'black',
    color: 'white',
}, csstips.centerCenter, csstips.padding(10, 0, 35, 0), csstips.content, csstips.vertical, csstips.verticallySpaced(10)); };
var bodyContainerStyle = function () { return style(csstips.padding(30, percent(20), 30, percent(20)), csstips.content, csstips.vertical); };
var bodySectionContainerStyle = function () { return style(csstips.content, csstips.vertical); };
var subHeaderContainerStyle = function () { return style({
    margin: '50px 0 0 0',
}, csstips.centerCenter, csstips.content, csstips.vertical); };
var paragraphContainerStyle = function () { return style({
    margin: '0 20px 0 20px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
}, csstips.startJustified); };
var indentedParagraphContainerStyle = function () { return style({
    margin: '10px 50px 10px 50px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
}, csstips.startJustified, csstips.content, csstips.vertical); };
var codeContainerStyle = function () { return style({
    margin: '10px 20px 10px 20px',
    padding: '20px 20px 20px 20px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
    backgroundColor: color('#eee').toString(),
    border: "1px solid " + color('#999').toString(),
    fontFamily: 'monospace, monospace',
    fontSize: '16px',
}); };
var imageContainerStyle = function () { return style({
    margin: '30px auto',
}, csstips.centerCenter, csstips.height(70), csstips.width(70)); };
var linkStyle = function () { return style({
    display: 'inline',
}); };
var buttonStyle = function (templateColor) { return style({
    margin: '0 auto',
    cursor: 'pointer',
    backgroundColor: rgba(templateColor.r, templateColor.g, templateColor.b, templateColor.a).toString(),
    color: rgba(templateColor.r, templateColor.g, templateColor.b, templateColor.a).invert().toString(),
}, csstips.height(50), csstips.width(200)); };
// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------
var TemplateComponent = /** @class */ (function (_super) {
    __extends(TemplateComponent, _super);
    function TemplateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateComponent.prototype.componentDidMount = function () {
        this.props.onInitModel();
    };
    TemplateComponent.prototype.componentWillUnmount = function () {
        this.props.onResetModel();
    };
    TemplateComponent.prototype.renderComponent = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h2", { className: subHeaderContainerStyle() }, "Component"),
            React.createElement("h3", null, "Asset"),
            React.createElement("p", { className: paragraphContainerStyle() }, "Add asset to ~/src/asset and load via component using require syntax:"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/component/Template.tsx",
                React.createElement("br", null),
                React.createElement("br", null),
                "const TemplateAsset = require('../asset/TemplateAsset');",
                React.createElement("br", null),
                React.createElement("br", null),
                "...",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("img", { className: imageContainerStyle(), src: TemplateAsset, alt: 'TemplateAsset' })),
            React.createElement("img", { className: imageContainerStyle(), src: TemplateAsset, alt: 'TemplateAsset' }),
            React.createElement("h3", null, "Style"),
            React.createElement("p", { className: paragraphContainerStyle() }, "Components should be styled using the included inline, optimized, type safe style APIs:"),
            React.createElement("b", { className: indentedParagraphContainerStyle() }, "1. typestyle"),
            React.createElement("b", { className: indentedParagraphContainerStyle() }, "2. csstips"),
            React.createElement("b", { className: indentedParagraphContainerStyle() }, "3. csx"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/component/Template.tsx",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("p", { className: paragraphContainerStyle() },
                "See\u00A0",
                React.createElement("a", { className: linkStyle(), href: 'https://typestyle.github.io' }, "https://typestyle.github.io"),
                "\u00A0for more info"),
            React.createElement("h3", null, "Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/component/Template.test.tsx",
                React.createElement("br", null),
                React.createElement("br", null))));
    };
    TemplateComponent.prototype.renderModel = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h2", { className: subHeaderContainerStyle() }, "Model"),
            React.createElement("h3", null, "Simple Action Creator"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Simple Action Creator Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.test.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Reducer"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Reducer Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.test.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Validator"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Validator Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.test.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Component Integration"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/component/Template.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Selector"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/selector/templateProperty.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Selector Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/selector/templateProperty.test.ts",
                React.createElement("br", null),
                React.createElement("br", null))));
    };
    TemplateComponent.prototype.renderController = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h2", { className: subHeaderContainerStyle() }, "Controller"),
            React.createElement("h3", null, "Batch Action"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/controller/template.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("input", { className: buttonStyle(this.props.color), type: 'button', value: 'Update Color Batch', onClick: this.props.onUpdateTemplateColorBatch }),
            React.createElement("h3", null, "Batch Action Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/controller/template.test.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Async Action"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/controller/template.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("input", { className: buttonStyle(this.props.color), type: 'button', value: 'Update Color Async', onClick: this.props.onUpdateTemplateColorAsync }),
            React.createElement("h3", null, "Async Action Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/controller/template.test.ts",
                React.createElement("br", null),
                React.createElement("br", null))));
    };
    TemplateComponent.prototype.renderType = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h2", { className: subHeaderContainerStyle() }, "Type"),
            React.createElement("h3", null, "Definition"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/type/templateProperty.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Helper Function"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/type/templateProperty.ts",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("h3", null, "Helper Function Test"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/type/templateProperty.test.ts",
                React.createElement("br", null),
                React.createElement("br", null))));
    };
    TemplateComponent.prototype.renderError = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h3", null, "Error"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/utility/BsUiError.ts",
                React.createElement("br", null),
                React.createElement("br", null))));
    };
    TemplateComponent.prototype.renderJavaScript = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h2", { className: subHeaderContainerStyle() }, "Controller"),
            React.createElement("h3", null, "Load JavaScript"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/component/Template.tsx",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("input", { className: buttonStyle(this.props.color), type: 'button', value: 'Invoke JavaScript module', onClick: function () { return jsAlert("JS LOADED"); } })));
    };
    TemplateComponent.prototype.renderBrightSignObject = function () {
        return (React.createElement("div", { className: bodySectionContainerStyle() },
            React.createElement("h2", { className: subHeaderContainerStyle() }, "Controller"),
            React.createElement("h3", null, "BrightSign object usage"),
            React.createElement("div", { className: codeContainerStyle() },
                "~/src/component/Template.tsx",
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("input", { className: buttonStyle(this.props.color), type: 'button', value: 'Invoke BrightScript object', onClick: function () {
                    var dc = new VideoInput().defaultConfig();
                    jsAlert(JSON.stringify(dc));
                } })));
    };
    TemplateComponent.prototype.renderHeader = function () {
        return (React.createElement("div", { className: headerContainerStyle() },
            React.createElement("h1", null, "# BrightSign"),
            React.createElement("p", null, "UI Template Project")));
    };
    TemplateComponent.prototype.renderBody = function () {
        return (React.createElement("div", { className: bodyContainerStyle() },
            this.renderComponent(),
            this.renderModel(),
            this.renderController(),
            this.renderType(),
            this.renderError(),
            this.renderJavaScript(),
            this.renderBrightSignObject()));
    };
    TemplateComponent.prototype.render = function () {
        return (React.createElement("div", { className: containerStyle },
            this.renderHeader(),
            this.renderBody()));
    };
    return TemplateComponent;
}(React.Component));
export { TemplateComponent };
// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------
var mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        onInitModel: initModel,
        onResetModel: resetModel,
        onUpdateTemplateColorAsync: updateTemplateColorAsync,
        onUpdateTemplateColorBatch: updateTemplateColorBatch,
    }, dispatch);
};
var mapStateToProps = function (state) {
    return {
        color: bsUiModelGetTemplatePropertyColorState(state)
    };
};
export var Template = connect(mapStateToProps, mapDispatchToProps)(TemplateComponent);
//# sourceMappingURL=Template.js.map