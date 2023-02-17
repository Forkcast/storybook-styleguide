"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  results: _propTypes.default.array,
  details: _propTypes.default.object
};
exports.propTypes = propTypes;
var defaultProps = {
  classes: [],
  results: []
};
exports.defaultProps = defaultProps;