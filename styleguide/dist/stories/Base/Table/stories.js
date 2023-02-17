"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.APrimary = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _excluded = ["classes", "headers", "rows"];
var _default = {
  title: 'Base Components/Table',
  component: _component.default,
  argTypes: {}
};
exports.default = _default;
var Template = function Template(_ref) {
  var classes = _ref.classes,
    headers = _ref.headers,
    rows = _ref.rows,
    args = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_component.default, Object.assign({
    classes: classes,
    headers: headers,
    rows: rows
  }, args));
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: [],
  headers: [{
    key: 'test',
    value: 'test'
  }, {
    key: 'test2',
    value: 'test2'
  }],
  rows: [{
    key: 'row1',
    columns: [{
      key: 'test3',
      value: 'test3'
    }, {
      key: 'test4',
      value: 'test4'
    }]
  }, {
    key: 'row2',
    columns: [{
      key: 'test5',
      value: 'test5'
    }, {
      key: 'test6',
      value: 'test6'
    }]
  }]
};
APrimary.storyName = '01. Primary';