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
  title: 'Pages/Support/Search/SearchResult',
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
  classes: [],
  rows: [{
    key: 'row1',
    columns: [{
      key: '90129',
      value: '90129'
    }, {
      key: 'John',
      value: 'John'
    }, {
      key: 'Smith1',
      value: 'Smith'
    }, {
      key: '1',
      value: '300-555-1234'
    }, {
      key: 'b1',
      value: '2/9/1995'
    }, {
      key: 'a1',
      value: 'View Details',
      class: 'action'
    }]
  }, {
    key: 'row2',
    columns: [{
      key: '68186',
      value: '68186'
    }, {
      key: 'Alexa',
      value: 'Alexa'
    }, {
      key: 'Smith2',
      value: 'Smith'
    }, {
      key: '2',
      value: '300-555-1234'
    }, {
      key: 'b2',
      value: '6/4/1992'
    }, {
      key: 'a2',
      value: 'View Details',
      class: 'action'
    }]
  }]
};
APrimary.storyName = 'Component';