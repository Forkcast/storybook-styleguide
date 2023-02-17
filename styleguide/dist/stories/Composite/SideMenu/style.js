"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _component = _interopRequireDefault(require("Base/Panel/component"));
var _templateObject;
var _default = (0, _styledComponents.default)(_component.default)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n  div.rule {\n    margin-top: 25px;\n    margin-bottom: 40px;\n  }\n  div.section > p {\n    margin-bottom: 30px;\n  }\n  div.section-item {\n    display: flex;\n    align-items: center;\n    margin-bottom: 25px;\n    img {\n      margin-right: 10px;\n    }\n  }\n"])));
exports.default = _default;