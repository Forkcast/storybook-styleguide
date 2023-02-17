"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _props = require("./props");
var Component = function Component(_ref) {
  var headers = _ref.headers,
    rows = _ref.rows,
    classes = _ref.classes;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(function (header) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: header.key
    }, header.value);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, rows.map(function (row) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: row.key
    }, row.columns.map(function (column) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: column.key,
        className: column.class ? column.class : '',
        onClick: column.onClick ? column.onClick : function () {
          return false;
        }
      }, column.value);
    }));
  })));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;