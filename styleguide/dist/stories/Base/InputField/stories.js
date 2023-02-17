"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CTertiary = exports.BSecondary = exports.APrimary = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("InputField/component"));
var _edit = _interopRequireDefault(require("./assets/edit.svg"));
var _excluded = ["classes", "type", "children"];
var _default = {
  title: 'Base Components/InputField',
  component: _component.default,
  argTypes: {}
};
exports.default = _default;
var Template = function Template(_ref) {
  var classes = _ref.classes,
    type = _ref.type,
    children = _ref.children,
    args = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_component.default, Object.assign({
    classes: classes,
    type: type
  }, args), children);
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: [],
  children: 'Search by Phone Number, User ID, CIN or SSN',
  name: 'input1'
};
APrimary.storyName = '01. Border';
var BSecondary = Template.bind({});
exports.BSecondary = BSecondary;
BSecondary.args = {
  classes: ['form-style'],
  children: 'Name',
  editImage: _edit.default,
  name: 'input2'
};
BSecondary.storyName = '02. Form Style';
var CTertiary = Template.bind({});
exports.CTertiary = CTertiary;
CTertiary.args = {
  classes: ['form-style'],
  children: 'Name',
  editImage: _edit.default,
  name: 'input3',
  disabled: true
};
CTertiary.storyName = '03. Disabled Form Style';