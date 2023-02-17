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
var _excluded = ["classes", "phone", "firstName", "lastName", "email", "status", "language", "dateOfBirth", "locations", "zip", "eligibilities"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    phone = _ref.phone,
    firstName = _ref.firstName,
    lastName = _ref.lastName,
    email = _ref.email,
    status = _ref.status,
    language = _ref.language,
    dateOfBirth = _ref.dateOfBirth,
    locations = _ref.locations,
    zip = _ref.zip,
    eligibilities = _ref.eligibilities,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "Personal Information"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: phone,
    name: "phone"
  }, "Phone No.", /*#__PURE__*/_react.default.createElement("span", null, "(Default)")), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: firstName,
    name: "firstName"
  }, "First Name"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: lastName,
    name: "lastName"
  }, "Last Name"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: email,
    name: "email"
  }, "Email"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: status,
    name: "status"
  }, "Status"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: language,
    name: "language"
  }, "Preferred Language"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: dateOfBirth,
    name: "dateOfBirth"
  }, "Date of Birth"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: locations.primary,
    name: "primaryLocation"
  }, "Primary Location"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: zip,
    name: "zipCode"
  }, "ZIP Code"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    classes: ['form-style'],
    value: eligibilities.join(', '),
    name: "eligibility"
  }, "Eligibility")));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;