'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  min-width: 10px;\n  padding: 1px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: ', ';\n  vertical-align: bottom;\n  white-space: nowrap;\n  text-align: center;\n  background-color: ', ';\n  border-radius: 10px;\n'], ['\n  display: inline-block;\n  min-width: 10px;\n  padding: 1px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: ', ';\n  vertical-align: bottom;\n  white-space: nowrap;\n  text-align: center;\n  background-color: ', ';\n  border-radius: 10px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSpan = _styledComponents2.default.span(_templateObject, _variables.colors.white, _variables.colors.dustyGray);

/**
 * small badge - we can update this later
 */
var Badge = function Badge(_ref) {
  var style = _ref.style,
      children = _ref.children;

  return _react2.default.createElement(
    StyledSpan,
    { style: style },
    children
  );
};

Badge.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
} : {};

exports.default = Badge;