'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckIcon = function CheckIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    (0, _extends3.default)({}, props, { transform: 'translate(0, -2)' }),
    _react2.default.createElement('path', { d: 'M3 18.2L11.4 26.7C11.8 27.1 12.4 27.1 12.8 26.7L30.1 9' })
  );
};

exports.default = CheckIcon;