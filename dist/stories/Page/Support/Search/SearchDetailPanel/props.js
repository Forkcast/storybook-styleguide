"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.propTypes=exports.defaultProps=void 0;var _propTypes=_interopRequireDefault(require("prop-types"));var propTypes={classes:_propTypes.default.arrayOf(_propTypes.default.string),details:_propTypes.default.object};exports.propTypes=propTypes;var defaultProps={classes:[],details:{user:{rows:[],locations:{}},notes:{rows:[]},events:{rows:[]},orders:{rows:[]},personal:{rows:[]},contacts:{rows:[]},rd:{rows:[]},feedback:{rows:[]},payments:{rows:[]},benefits:{rows:[]}},actions:{quickAccess:function quickAccess(){},notes:function notes(){}}};exports.defaultProps=defaultProps;