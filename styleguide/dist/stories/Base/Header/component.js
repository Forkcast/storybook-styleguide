"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = require("./style");
var _props = require("./props");
var Component = function Component(_ref) {
  var children = _ref.children,
    level = _ref.level,
    classes = _ref.classes;
  var ComponentStyle = level === 1 ? _style.h1 : _style.h2;
  return /*#__PURE__*/_react.default.createElement(ComponentStyle, {
    className: classes.join(' ')
  }, children);
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;