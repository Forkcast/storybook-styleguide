"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DLarge = exports.CMedium = exports.CBigger = exports.BHeavy3 = exports.BHeavy2 = exports.BHeavy1 = exports.APrimary = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _default = {
  title: 'Base Components/Paragraph',
  component: _component.default,
  argTypes: {}
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
  children: 'Primary'
};
APrimary.storyName = '01. Primary';
var BHeavy1 = Template.bind({});
exports.BHeavy1 = BHeavy1;
BHeavy1.args = {
  classes: ['heavy1'],
  children: 'Heavy 1'
};
BHeavy1.storyName = '02. Heavy1';
var BHeavy2 = Template.bind({});
exports.BHeavy2 = BHeavy2;
BHeavy2.args = {
  classes: ['heavy2'],
  children: 'Heavy 2'
};
BHeavy2.storyName = '03. Heavy2';
var BHeavy3 = Template.bind({});
exports.BHeavy3 = BHeavy3;
BHeavy3.args = {
  classes: ['heavy3'],
  children: 'Heavy 3'
};
BHeavy3.storyName = '04. Heavy3';
var CBigger = Template.bind({});
exports.CBigger = CBigger;
CBigger.args = {
  classes: ['bigger'],
  children: 'Bigger'
};
CBigger.storyName = '05. Bigger';
var CMedium = Template.bind({});
exports.CMedium = CMedium;
CMedium.args = {
  classes: ['medium'],
  children: 'Medium'
};
CMedium.storyName = '06. Medium';
var DLarge = Template.bind({});
exports.DLarge = DLarge;
DLarge.args = {
  classes: ['large'],
  children: 'Large'
};
DLarge.storyName = '07. Large';