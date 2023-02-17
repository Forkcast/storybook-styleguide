"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("BenefitHistory/component"));
var _component2 = _interopRequireDefault(require("ContactHistory/component"));
var _component3 = _interopRequireDefault(require("EventLog/component"));
var _component4 = _interopRequireDefault(require("Feedback/component"));
var _component5 = _interopRequireDefault(require("Notes/component"));
var _component6 = _interopRequireDefault(require("Orders/component"));
var _component7 = _interopRequireDefault(require("PaymentHistory/component"));
var _component8 = _interopRequireDefault(require("PersonalInformation/component"));
var _component9 = _interopRequireDefault(require("QuickAccess/component"));
var _component10 = _interopRequireDefault(require("RDAssessment/component"));
var _component11 = _interopRequireDefault(require("UserLocations/component"));
var _props = require("./props");
var _excluded = ["classes", "details", "actions"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    details = _ref.details,
    actions = _ref.actions,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component9.default, Object.assign({}, details.user, {
    actions: actions.quickAccess
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "two-column"
  }, /*#__PURE__*/_react.default.createElement(_component5.default, Object.assign({}, details.notes, {
    actions: actions.notes
  })), /*#__PURE__*/_react.default.createElement(_component3.default, details.events), /*#__PURE__*/_react.default.createElement(_component6.default, details.orders), /*#__PURE__*/_react.default.createElement(_component8.default, details.user), /*#__PURE__*/_react.default.createElement(_component2.default, details.contacts), /*#__PURE__*/_react.default.createElement(_component11.default, details.user.locations), /*#__PURE__*/_react.default.createElement(_component10.default, details.rd), /*#__PURE__*/_react.default.createElement(_component4.default, {
    feedback: details.feedback
  }), /*#__PURE__*/_react.default.createElement(_component7.default, details.payments), /*#__PURE__*/_react.default.createElement(_component.default, details.benefits)));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;