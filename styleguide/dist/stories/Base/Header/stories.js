"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BSecondary = exports.APrimary = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("Header/component"));
var _default = {
  title: 'Base Components/Header',
  component: _component.default,
  argTypes: {}
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: args.classes,
    level: args.level
  }, args.children);
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: [],
  children: 'Level 1 Header',
  level: 1
};
APrimary.storyName = '01. Level 1';
var BSecondary = Template.bind({});
exports.BSecondary = BSecondary;
BSecondary.args = {
  classes: [],
  children: 'Level 2 Header',
  level: 2
};
BSecondary.storyName = '02. Level 2';