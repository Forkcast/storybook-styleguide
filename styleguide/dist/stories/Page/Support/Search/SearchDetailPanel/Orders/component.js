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
var _props = require("./props");
var _excluded = ["classes", "orderTotalCount", "orders", "currentCount", "upcomingCount", "pastCount"];
var Component = function Component(_ref) {
  var classes = _ref.classes,
    orderTotalCount = _ref.orderTotalCount,
    orders = _ref.orders,
    currentCount = _ref.currentCount,
    upcomingCount = _ref.upcomingCount,
    pastCount = _ref.pastCount,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_style.default, {
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement(_component2.default, null, /*#__PURE__*/_react.default.createElement(_component.default, null, "Orders (", orderTotalCount, ")"), /*#__PURE__*/_react.default.createElement("div", {
    className: 'tabs'
  }, /*#__PURE__*/_react.default.createElement(_component3.default, null, "Current (", currentCount, ")"), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Upcoming (", upcomingCount, ")"), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Past (", pastCount, ")")), /*#__PURE__*/_react.default.createElement("div", null, orders.map(function (order) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: order.orderNumber,
      className: 'order-block'
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: 'order-summary'
    }, /*#__PURE__*/_react.default.createElement(_component3.default, null, "Order No. ", order.orderNumber), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Status: ", order.orderStatus), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Meal: ", order.meal.join(', ')), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Benefit: ", order.benefit, " | Funder: ", order.funder), /*#__PURE__*/_react.default.createElement(_component3.default, null, "View Details")), /*#__PURE__*/_react.default.createElement("div", {
      className: 'delivery-summary'
    }, /*#__PURE__*/_react.default.createElement(_component3.default, null, "Expected Delivery: ", order.expectedDelivery), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Issue created: ", order.issueCreated), /*#__PURE__*/_react.default.createElement(_component3.default, null, "Tracking No: ", order.trackingNumber), " Copy Goes here", /*#__PURE__*/_react.default.createElement(_component3.default, null, "Tracking Link: ", /*#__PURE__*/_react.default.createElement("a", {
      href: order.trackingLink,
      target: "_blank"
    }, "Click to view"), " ")));
  }))));
};
Component.defaultProps = _props.defaultProps;
var _default = Component;
exports.default = _default;