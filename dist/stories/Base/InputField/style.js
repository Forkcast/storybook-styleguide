"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _templateObject;var _default=_styledComponents.default.div(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2.default)(["\n\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 13.67px;\n    line-height: 16.66px;\n    position: relative;\n    &.disabled {\n        &.form-style{\n            &:hover {\n                .edit-icon {\n                    display: none;\n                }\n            }\n            input {\n                background-color: white;\n            }\n        }      \n    }\n\n    .edit-icon {\n        display: none;\n    }\n\n    label {\n        color: #717171;\n        position: absolute;\n        top: -8px;\n        left: 15px; \n        background-color: white;        \n    }\n\n    input {\n        border: solid 1px #D2D5DB;\n        border-radius: 4px;\n        height: 18px;\n        font-weight: 600;\n        font-size: 14px;\n        line-height: 17px;\n        color: #242424;\n        padding:15px;\n        width: calc(100% - 30px);\n    }\n\n    &.form-style {\n\n        label {\n            color: #717171;\n            position: static;\n            margin-bottom: 5px;\n            display: block;            \n        }\n\n        input {\n            border: solid 0px;\n            border-bottom: solid 1px rgba(0,0,0,0.5);\n            border-radius: 0px;\n            padding: 0px;\n            font-size: 15.9468px;\n            line-height: 17px;\n            color: #717171;\n            &:focus  {\n                outline: none;                        \n                border-bottom: solid 1px #00A98F;\n            }\n        }\n\n        &:hover {\n            .edit-icon {\n                display: block;\n                position: absolute;\n                right: 50px;\n                top: 0px;\n           }\n        }\n\n    }\n"])));exports.default=_default;