'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledInput = _styledComponents2.default.input(_templateObject, function (props) {
  return computeStyles(props.type);
});

var computeStyles = function computeStyles(type) {
  switch (type) {
    case 'checkbox':
    case 'radio':
      return '\n        display: inline;\n        margin-right: ' + _variables.theme.smallSpace + ';\n      ';
    case 'file':
      return '\n        margin-bottom: ' + _variables.theme.baseSpace + ';\n        width: \'100%\';\n      ';
    default:
      return '\n        appearance: none;\n        border-width: 1px;\n        border-color: ' + _variables.theme.borderColor + ';\n        border-radius: ' + _variables.theme.borderRadius + ';\n        border-style: solid;\n        box-shadow: none;\n        box-sizing: border-box;\n        color: ' + _variables.theme.fontColor + ';\n        font-family: ' + _variables.theme.fontFamily + ';\n        font-size: ' + _variables.theme.fontSize + ';\n        margin-bottom: ' + _variables.theme.baseSpace + ';\n        padding-bottom: ' + _variables.theme.baseSpace + ';\n        padding-left: ' + _variables.theme.baseSpace + ';\n        padding-top: ' + _variables.theme.baseSpace + ';\n        padding-right: ' + _variables.theme.baseSpace + ';\n\n        &:hover {\n          border-color: ' + (0, _polished.shade)(0.2, _variables.theme.borderColor) + ';\n        }\n\n        &:focus {\n          border-color: ' + _variables.theme.actionColor.light + ';\n          box-shadow: ' + _variables.theme.formBoxShadowFocus + ';\n          outline: none;\n        }\n\n        &:disabled {\n          background-color: ' + (0, _polished.darken)(0.1, _variables.theme.backgroundColor) + ';\n          cursor: not-allowed;\n\n          &:hover {\n            border: ' + _variables.theme.border + ';\n          }\n        }\n\n        &::placeholder {\n          color: ' + (0, _polished.tint)(0.4, _variables.theme.fontColor) + ';\n        }\n        ';
  }
};

var Input = function Input(props) {
  return _react2.default.createElement(StyledInput, props);
};

exports.default = Input;