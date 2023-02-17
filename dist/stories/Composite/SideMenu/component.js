"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("Base/Paragraph/component"));
var _component2 = _interopRequireDefault(require("Base/Rule/component"));
var _component3 = _interopRequireDefault(require("Composite/Avatar/component"));
var _props = require("./props");
var Component = function Component(_ref) {
  var _onClick = _ref.onClick,
    className = _ref.className,
    menuItems = _ref.menuItems,
    classes = _ref.classes;
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component3.default, {
    classes: ['profile']
  }), /*#__PURE__*/_react.default.createElement(_component2.default, {
    classes: ['rule']
  }), menuItems.map(function (section) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: section.name,
      className: 'section'
    }, /*#__PURE__*/_react.default.createElement(_component.default, {
      classes: ['bigger', 'heavy2']
    }, section.name), section.items.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "".concat(section.name, "_").concat(item.name),
        onClick: function onClick(e) {
          return _onClick(e, item.path);
        },
        className: [className, 'section-item'].join(' ')
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
        src: item.icon,
        alt: item.name
      })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_component.default, {
        classes: ['big', 'heavy1']
      }, item.name)));
    }));
  }));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;