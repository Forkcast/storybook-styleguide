"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.propTypes=exports.defaultProps=void 0;var _propTypes=_interopRequireDefault(require("prop-types"));var _avatar=_interopRequireDefault(require("./assets/avatar.svg"));var propTypes={onClick:_propTypes.default.func,classes:_propTypes.default.arrayOf(_propTypes.default.string),image:_propTypes.default.string,name:_propTypes.default.string};exports.propTypes=propTypes;var defaultProps={onClick:undefined,classes:[],image:_avatar.default,name:''};exports.defaultProps=defaultProps;