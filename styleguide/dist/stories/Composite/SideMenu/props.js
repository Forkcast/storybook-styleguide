"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _square = _interopRequireDefault(require("./assets/square.svg"));
var propTypes = {
  onClick: _propTypes.default.func,
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    "name": _propTypes.default.string.isRequired,
    "items": _propTypes.default.arrayOf(_propTypes.default.shape({
      "name": _propTypes.default.string.isRequired,
      "path": _propTypes.default.string.isRequired,
      "icon": _propTypes.default.string
    }).isRequired).isRequired
  }).isRequired).isRequired
};
exports.propTypes = propTypes;
var defaultProps = {
  onClick: undefined,
  classes: [],
  menuItems: [{
    'name': 'Dashboards',
    'items': [{
      'name': 'Metrics',
      'icon': _square.default,
      'path': '/metrics'
    }, {
      'name': 'Users',
      'icon': _square.default,
      'path': '/users'
    }, {
      'name': 'Statuses',
      'icon': _square.default,
      'path': '/statuses'
    }]
  }, {
    'name': 'Modules',
    'items': [{
      'name': 'Acquisition',
      'icon': _square.default,
      'path': '/acquisition'
    }, {
      'name': 'Eligibility',
      'icon': _square.default,
      'path': '/eligibility'
    }, {
      'name': 'Support',
      'icon': _square.default,
      'path': '/support'
    }]
  }]
};
exports.defaultProps = defaultProps;