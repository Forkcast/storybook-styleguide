"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EOnClick = exports.Disabled = exports.CTertiary = exports.BSecondary = exports.APrimary = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _default = {
  title: 'Base Components/Button',
  component: _component.default,
  argTypes: {}
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: args.classes,
    disabled: args.disabled,
    onClick: args.onClick
  }, args.children);
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: [],
  disabled: false,
  children: 'Primary',
  onClick: undefined
};
APrimary.storyName = '01. Primary';
var BSecondary = Template.bind({});
exports.BSecondary = BSecondary;
BSecondary.args = {
  classes: ['secondary'],
  disabled: false,
  children: 'Secondary',
  onClick: undefined
};
BSecondary.storyName = '02. Secondary';
var CTertiary = Template.bind({});
exports.CTertiary = CTertiary;
CTertiary.args = {
  classes: ['tertiary'],
  disabled: false,
  children: 'Tertiary',
  onClick: undefined
};
CTertiary.storyName = '03. Tertiary';
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  classes: [],
  disabled: true,
  children: 'Disabled',
  onClick: undefined
};
Disabled.storyName = '04. Disabled';
var EOnClick = Template.bind({});
exports.EOnClick = EOnClick;
EOnClick.args = {
  classes: [],
  disabled: false,
  children: 'On Click',
  onClick: function onClick(e) {
    return alert('I have been clicked.');
  }
};
EOnClick.storyName = '05. On Click';