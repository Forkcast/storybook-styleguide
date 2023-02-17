"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("Base/Paragraph/component"));
var _props = require("./props");
var _excluded = ["classes", "summary", "date", "details"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    summary = _ref.summary,
    date = _ref.date,
    details = _ref.details,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component.default, null, summary), /*#__PURE__*/_react.default.createElement(_component.default, null, date), /*#__PURE__*/_react.default.createElement(_component.default, null, details));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;