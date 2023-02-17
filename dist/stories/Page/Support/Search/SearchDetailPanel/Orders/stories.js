"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.APrimary = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _component = _interopRequireDefault(require("./component"));
var _excluded = ["classes"];
var _default = {
  title: 'Pages/Support/Search/SearchDetailPanel/Orders',
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
var Template = function Template(_ref) {
  var classes = _ref.classes,
    args = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_component.default, Object.assign({
    classes: classes
  }, args));
};
var APrimary = Template.bind({});
exports.APrimary = APrimary;
APrimary.args = {
  classes: []
};
APrimary.storyName = '01.';