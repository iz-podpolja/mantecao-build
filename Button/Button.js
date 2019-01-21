'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 4px;\n  color: ', ';\n  cursor: pointer;\n  font-size: 14px;\n  padding: 11px 22px;\n  position: relative;\n  white-space: normal;\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  &:focus {\n    background-color: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n\n    &:hover {\n      background-color: ', ';\n      border-color: ', ';\n      color: ', ';\n    }\n  }\n\n  ', '\n'], ['\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 4px;\n  color: ', ';\n  cursor: pointer;\n  font-size: 14px;\n  padding: 11px 22px;\n  position: relative;\n  white-space: normal;\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  &:focus {\n    background-color: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n\n    &:hover {\n      background-color: ', ';\n      border-color: ', ';\n      color: ', ';\n    }\n  }\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: 16px;\n    padding: 11px 30px;\n  '], ['\n    font-size: 16px;\n    padding: 11px 30px;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _variables = require('../variables');

var _style = require('../utils/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHoverColor = function getHoverColor(props) {
  return props.hollow ? props.color : (0, _polished.darken)(0.1, props.color);
};

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.hollow ? _variables.colors.white : props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.hollow ? props.color : _variables.colors.white;
}, function (props) {
  return getHoverColor(props);
}, function (props) {
  return getHoverColor(props);
}, _variables.colors.white, function (props) {
  return getHoverColor(props);
}, function (props) {
  return getHoverColor(props);
}, _variables.colors.white, function (props) {
  return props.hollow ? _variables.colors.white : (0, _polished.darken)(0.1, props.color);
}, function (props) {
  return getHoverColor(props);
}, function (props) {
  return props.hollow ? props.color : props.white;
}, _style.media.medium(_templateObject2));

var Button = function Button(props) {
  return _react2.default.createElement(StyledButton, props);
};

Button.defaultProps = {
  color: _variables.colors.blueBayoux,
  hollow: false
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  hollow: _propTypes2.default.bool
} : {};

exports.default = Button;