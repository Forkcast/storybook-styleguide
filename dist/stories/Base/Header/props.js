"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  children: _propTypes.default.any,
  level: _propTypes.default.number
};
exports.propTypes = propTypes;
var defaultProps = {
  classes: [],
  level: 1
};
exports.defaultProps = defaultProps;