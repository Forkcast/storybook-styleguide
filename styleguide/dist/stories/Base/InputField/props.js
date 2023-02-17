"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  name: _propTypes.default.string.isRequired,
  type: _propTypes.default.string,
  defaultValue: _propTypes.default.any,
  onChange: _propTypes.default.func,
  children: _propTypes.default.any,
  disabled: _propTypes.default.bool
};
exports.propTypes = propTypes;
var defaultProps = {
  classes: [],
  type: 'text',
  disabled: false,
  onChange: function onChange(e, setValue) {
    return setValue(e.target.value);
  }
};
exports.defaultProps = defaultProps;