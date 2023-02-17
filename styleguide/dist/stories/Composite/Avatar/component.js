"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("Base/Paragraph/component"));
var _props = require("./props");
var Component = function Component(_ref) {
  var onClick = _ref.onClick,
    image = _ref.image,
    name = _ref.name,
    classes = _ref.classes;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' '),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'avatar-image'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: name
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: 'avatar-name'
  }, /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: ['heavy2', 'medium']
  }, name)), /*#__PURE__*/_react.default.createElement("div", {
    className: 'avatar-arrow'
  }, /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: ['heavy2', 'medium']
  }, "\u25BE")));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;