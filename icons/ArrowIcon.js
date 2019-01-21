'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowIcon = function ArrowIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { transform: 'translate(0.75, -1)' },
      _react2.default.createElement('path', { d: 'M3 12.1L14.6 24.5C15 24.9 15.6 24.9 16 24.5L27.5 12' })
    )
  );
};

exports.default = ArrowIcon;