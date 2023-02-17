"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _props = require("./props");
var _excluded = ["name", "type", "defaultValue", "onChange", "classes", "children", "editImage", "disabled"];
var Component = function Component(_ref) {
  var name = _ref.name,
    type = _ref.type,
    defaultValue = _ref.defaultValue,
    _onChange = _ref.onChange,
    classes = _ref.classes,
    children = _ref.children,
    editImage = _ref.editImage,
    disabled = _ref.disabled,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var classNames = classes.join(' ') + (disabled ? ' disabled' : '');
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classNames
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name
  }, children), /*#__PURE__*/_react.default.createElement("input", Object.assign({
    name: name,
    type: type,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e, setValue);
    },
    disabled: disabled
  }, props)), editImage ? /*#__PURE__*/_react.default.createElement("div", {
    className: 'edit-icon'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: editImage,
    alt: "Edit"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Edit")) : '');
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;