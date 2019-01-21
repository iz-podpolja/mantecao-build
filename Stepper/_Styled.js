'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledControls = exports.StyledExpander = exports.StyledChildren = exports.StyledDiv = exports.StyledStepperButton = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n  border-radius: 0;\n  border-left: 1px solid currentColor;\n  color: currentColor;\n  cursor: pointer;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  font-size: ', ';\n  justify-content: center;\n  opacity: 1;\n  padding: ', ' ', ';\n  white-space: normal;\n\n  &:hover,\n  &:focus,\n  &:disabled,\n  &:disabled:hover {\n    background-color: ', ';\n    color: currentColor;\n    opacity: 1;\n  }\n\n  &:first-of-type {\n    border-top-right-radius: ', ';\n    border-bottom: 1px solid currentColor;\n  }\n\n  &:last-of-type {\n    border-bottom-right-radius: ', ';\n  }\n'], ['\n  background-color: ', ';\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n  border-radius: 0;\n  border-left: 1px solid currentColor;\n  color: currentColor;\n  cursor: pointer;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  font-size: ', ';\n  justify-content: center;\n  opacity: 1;\n  padding: ', ' ', ';\n  white-space: normal;\n\n  &:hover,\n  &:focus,\n  &:disabled,\n  &:disabled:hover {\n    background-color: ', ';\n    color: currentColor;\n    opacity: 1;\n  }\n\n  &:first-of-type {\n    border-top-right-radius: ', ';\n    border-bottom: 1px solid currentColor;\n  }\n\n  &:last-of-type {\n    border-bottom-right-radius: ', ';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border: 1px solid ', ';\n  border-radius: ', ';\n  color: ', ';\n  cursor: ', ';\n  display: flex;\n  font-size: ', ';\n  opacity: ', ';\n  padding-left: ', ';\n'], ['\n  border: 1px solid ', ';\n  border-radius: ', ';\n  color: ', ';\n  cursor: ', ';\n  display: flex;\n  font-size: ', ';\n  opacity: ', ';\n  padding-left: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  justify-content: center;\n'], ['\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  justify-content: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  cursor: ', ';\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  justify-content: center;\n  padding: ', ';\n'], ['\n  color: ', ';\n  cursor: ', ';\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  justify-content: center;\n  padding: ', ';\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  justify-content: center;\n'], ['\n  color: ', ';\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n  justify-content: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledStepperButton = exports.StyledStepperButton = _styledComponents2.default.button(_templateObject, _variables.colors.white, _variables.theme.fontSize, _variables.theme.smallSpace, _variables.theme.baseSpace, _variables.colors.whiteSand, _variables.theme.borderRadius, _variables.theme.borderRadius);

var StyledDiv = exports.StyledDiv = _styledComponents2.default.div(_templateObject2, _variables.colors.pacificBlue, _variables.theme.borderRadius, _variables.theme.fontColor, function (props) {
  return props.disabled ? 'not-allowed' : 'inherit';
}, _variables.theme.fontSize, function (props) {
  return props.disabled ? 0.5 : 1;
}, _variables.theme.baseSpace);

var StyledChildren = exports.StyledChildren = _styledComponents2.default.div(_templateObject3);

var StyledExpander = exports.StyledExpander = _styledComponents2.default.div(_templateObject4, _variables.colors.silver, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, _variables.theme.baseSpace);

var StyledControls = exports.StyledControls = _styledComponents2.default.div(_templateObject5, _variables.colors.silver);