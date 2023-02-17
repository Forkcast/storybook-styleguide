"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
var _default = _styledComponents.default.button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 24px;\n  gap: 8px;\n  border-radius: 6px;\n  border: 1px;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 13.51px;\n  line-height: 16.47px;\n  background: #201751;\n  color: #FFFFFF;\n  flex: none;\n  flex-grow: 0;\n  cursor: pointer;\n  &.secondary {\n    background: #00A98F;\n  }\n  &.tertiary {\n    background: #F3523F;\n  }\n  &:disabled, &.secondary:disabled, &.tertiary:disabled {\n    background: #D2D1DC;\n  }\n"])));
exports.default = _default;