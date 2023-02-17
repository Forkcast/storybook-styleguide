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
var _component3 = _interopRequireDefault(require("Base/Table/component"));
var _props = require("./props");
var Component = function Component(_ref) {
  var classes = _ref.classes,
    action = _ref.action,
    rows = _ref.rows;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component.default, null, "Search Result"), /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component3.default, {
    headers: [{
      "key": "User ID",
      "value": "User ID"
    }, {
      "key": "First Name",
      "value": "First Name"
    }, {
      "key": "Last Name",
      "value": "Last Name"
    }, {
      "key": "Phone No",
      "value": "Phone No"
    }, {
      "key": "Date of Birth",
      "value": "Date of Birth"
    }, {
      "key": "Action",
      "value": "Action"
    }],
    rows: rows,
    action: action
  })));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;