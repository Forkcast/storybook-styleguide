"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  feedback: _propTypes.default.array
};
exports.propTypes = propTypes;
var defaultProps = {
  classes: [],
  feedback: []
};
exports.defaultProps = defaultProps;