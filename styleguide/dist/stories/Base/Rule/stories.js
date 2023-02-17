"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BContainer = exports.APrimary = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _default = {
  title: 'Base Components/Rule',
  component: _component.default,
  argTypes: {}
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: args.classes,
    width: args.width,
    offset: args.offset
  });
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: []
};
APrimary.storyName = '01. Primary';
var Template2 = function Template2(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      'background-color': '#e2e2e2',
      'width': '100%',
      'padding': '50px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      'padding': '25px',
      'height': '100px',
      'background-color': 'white',
      'border-radius': '6px',
      'width': '100px'
    }
  }, /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: args.classes,
    width: args.width,
    offset: args.offset
  })));
};
var BContainer = Template2.bind({});
exports.BContainer = BContainer;
BContainer.args = {
  classes: []
};
BContainer.storyName = '02. Example with Container';