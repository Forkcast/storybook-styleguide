"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  }).isRequired),
  rows: _propTypes.default.arrayOf(_propTypes.default.shape({
    columns: _propTypes.default.arrayOf(_propTypes.default.shape({
      key: _propTypes.default.string.isRequired,
      value: _propTypes.default.string.isRequired
    }))
  }))
};
exports.propTypes = propTypes;
var defaultProps = {
  classes: [],
  rows: []
};
exports.defaultProps = defaultProps;