"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  onClick: _propTypes.default.func,
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  children: _propTypes.default.any
};
exports.propTypes = propTypes;
var defaultProps = {
  onClick: undefined,
  classes: []
};
exports.defaultProps = defaultProps;