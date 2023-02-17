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
var _component3 = _interopRequireDefault(require("Base/Table/component"));
var _props = require("./props");
var _excluded = ["classes", "rows"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    rows = _ref.rows,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "Event Log"), /*#__PURE__*/_react.default.createElement(_component3.default, {
    headers: [{
      "key": "Event",
      "value": "Event"
    }, {
      "key": "Date",
      "value": "Date"
    }],
    rows: rows
  })));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;