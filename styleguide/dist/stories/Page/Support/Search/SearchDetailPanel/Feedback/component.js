"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _component = _interopRequireDefault(require("Base/Header/component"));
var _component2 = _interopRequireDefault(require("Base/Panel/component"));
var _component3 = _interopRequireDefault(require("Base/Paragraph/component"));
var _component4 = _interopRequireDefault(require("Base/Button/component"));
var _component5 = _interopRequireDefault(require("FeedbackDetail/component"));
var _props = require("./props");
var _excluded = ["classes", "feedback"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    feedback = _ref.feedback,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "Feedback"), /*#__PURE__*/_react.default.createElement(_component4.default, null, "Write Feedback"), feedback.length > 0 ? /*#__PURE__*/_react.default.createElement(_component5.default, feedback[0]) : '', feedback.length > 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "feedback_list"
  }, /*#__PURE__*/_react.default.createElement(_component3.default, {
    classes: ['active']
  }, "Read more"), feedback.map(function (item, index) {
    if (index == 0) return;
    return /*#__PURE__*/_react.default.createElement(_component5.default, Object.assign({
      classes: ['hidden'],
      key: "feedback_".concat(index)
    }, item));
  })) : ''));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;