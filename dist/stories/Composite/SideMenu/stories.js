"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.APrimary = void 0;
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _default = {
  title: 'Composite Components/Side Menu',
  component: _component.default,
  argTypes: {}
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_component.default, {
    classes: args.classes,
    onClick: args.onClick
  });
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: [],
  onClick: function onClick(e, path) {
    return alert("Simulate routing to ".concat(path));
  }
};
APrimary.storyName = '01. Default';