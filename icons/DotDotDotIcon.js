'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DotDotDotIcon = function DotDotDotIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', {
      strokeWidth: '0px',
      fill: 'currentColor',
      d: 'M7 14L11 14 11 18 7 18 7 14ZM14 14L18 14 18 18 14 18 14 14ZM21 14L25 14 25 18 21 18 21 14Z'
    })
  );
};

exports.default = DotDotDotIcon;