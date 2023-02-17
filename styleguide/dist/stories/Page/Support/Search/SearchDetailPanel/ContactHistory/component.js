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
var _component3 = _interopRequireDefault(require("Base/Button/component"));
var _component4 = _interopRequireDefault(require("Base/Table/component"));
var _props = require("./props");
var _excluded = ["classes", "rows"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    rows = _ref.rows,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "Contact History"), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react.default.createElement(_component3.default, null, "Send Text"), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Call")), /*#__PURE__*/_react.default.createElement(_component4.default, {
    headers: [{
      "key": "Date",
      "value": "Date"
    }, {
      "key": "Duration",
      "value": "Duration"
    }, {
      "key": "Call Type",
      "value": "Call Type"
    }, {
      "key": "Caller",
      "value": "Caller"
    }, {
      "key": "Receiver",
      "value": "Receiver"
    }, {
      "key": "Status",
      "value": "Status"
    }],
    rows: rows
  })));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;