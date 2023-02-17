"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("Base/Header/component"));
var _component2 = _interopRequireDefault(require("Base/Panel/component"));
var _component3 = _interopRequireDefault(require("Base/InputField/component"));
var _component4 = _interopRequireDefault(require("Base/Button/component"));
var _component5 = _interopRequireDefault(require("SearchResult/component"));
var _component6 = _interopRequireDefault(require("SearchDetailPanel/component"));
var _props = require("./props");
var Component = function Component(_ref) {
  var results = _ref.results,
    details = _ref.details,
    searchActions = _ref.searchActions,
    resultActions = _ref.resultActions,
    detailActions = _ref.detailActions,
    classes = _ref.classes;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component.default, null, "Support"), /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "User Detail Search"), /*#__PURE__*/_react.default.createElement(_component3.default, {
    name: "search"
  }, "Search by Name, Phone Number, User ID, CIN or SSN"), /*#__PURE__*/_react.default.createElement(_component4.default, {
    onClick: searchActions
  }, "Search")), results.length > 0 && !details ? /*#__PURE__*/_react.default.createElement(_component5.default, {
    rows: results
  }) : '', details ? /*#__PURE__*/_react.default.createElement(_component6.default, {
    actions: detailActions,
    details: details
  }) : '');
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;