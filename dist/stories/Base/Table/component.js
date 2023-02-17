"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _style=_interopRequireDefault(require("./style"));var _props=require("./props");var Component=function Component(_ref){var headers=_ref.headers,rows=_ref.rows,empty=_ref.empty,classes=_ref.classes;return _react.default.createElement(_style.default,{className:classes.join(' ')},_react.default.createElement("thead",null,_react.default.createElement("tr",null,headers.map(function(header){return _react.default.createElement("th",{key:header.key},header.value);}))),_react.default.createElement("tbody",null,rows.length>0?rows.map(function(row){return _react.default.createElement("tr",{key:row.key},row.columns.map(function(column){return _react.default.createElement("td",{key:column.key,className:column.class?column.class:'',onClick:column.onClick?column.onClick:function(){return false;}},column.value);}));}):_react.default.createElement("tr",null,_react.default.createElement("td",{colSpan:headers.length},empty))));};Component.defaultProps=_props.defaultProps;var _default=Component;exports.default=_default;