"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.APrimary = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _component2 = _interopRequireDefault(require("Paragraph/component"));
var _component3 = _interopRequireDefault(require("Header/component"));
var _default = {
  title: 'Base Components/Panel',
  component: _component.default,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{
        name: 'gray',
        value: '#F5F5F5'
      }]
    }
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: args.classes
  }, args.children);
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: [],
  children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_component3.default, null, "Example"), /*#__PURE__*/_react.default.createElement(_component2.default, null, "This is an example"))
};
APrimary.storyName = '01. With Header and Paragraph';