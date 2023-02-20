"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _templateObject;var _default=_styledComponents.default.div(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2.default)(["\n\n  &.hide {\n    display: none !important;\n  }\n\n  .overlay {\n    background: rgba(0,0,0,0.25);\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .panel-overlay {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n\n    .title-row {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      margin-bottom: 24px;\n      .title {\n        flex: 5;\n        h3 { \n          margin: 0px;\n        }\n      }\n      .close {\n        font-weight: 700;\n        font-family: \"Montserrat\";\n        cursor: pointer;\n        text-align: right;\n      }\n    }\n  }\n"])));exports.default=_default;