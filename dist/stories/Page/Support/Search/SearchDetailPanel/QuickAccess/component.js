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
var _component4 = _interopRequireDefault(require("Base/Button/component"));
var _props = require("./props");
var _excluded = ["classes", "userId", "firstName", "lastName", "eligibilities"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    userId = _ref.userId,
    firstName = _ref.firstName,
    lastName = _ref.lastName,
    eligibilities = _ref.eligibilities,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, userId, " - ", firstName, " ", lastName), /*#__PURE__*/_react.default.createElement(_component3.default, null, /*#__PURE__*/_react.default.createElement("strong", null, "Eligibility:"), " ", eligibilities.join(' ,')), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Quick access"), /*#__PURE__*/_react.default.createElement("div", {
    className: 'quick-access-buttons'
  }, /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['secondary']
  }, "RD Assessment"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['secondary']
  }, "Contact History"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['secondary']
  }, "User Locations"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['secondary']
  }, "Feedback"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['secondary']
  }, "Open in Intercom"))));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;