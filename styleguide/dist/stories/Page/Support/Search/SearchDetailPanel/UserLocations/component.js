"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("Base/Header/component"));
var _component2 = _interopRequireDefault(require("Base/Panel/component"));
var _component3 = _interopRequireDefault(require("Base/Paragraph/component"));
var _component4 = _interopRequireDefault(require("Base/InputField/component"));
var _props = require("./props");
var _excluded = ["classes", "primary", "locations"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    primary = _ref.primary,
    locations = _ref.locations,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "User Locations"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    name: "primaryLocation",
    value: primary
  }, "Primary Location ", /*#__PURE__*/_react.default.createElement("span", null, "(Default)")), locations.map(function (location, index) {
    return /*#__PURE__*/_react.default.createElement(_component4.default, {
      classes: ['form-style'],
      key: "location".concat(index),
      name: "location".concat(index),
      value: location
    }, "Other Location");
  })));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;