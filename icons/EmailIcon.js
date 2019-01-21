'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailIcon = function EmailIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { transform: 'translate(2, 7)' },
      _react2.default.createElement('rect', { x: '0', y: '0', width: '27', height: '17', rx: '1' }),
      _react2.default.createElement('path', { d: 'M0.9 1.3L12.6 8.3C13.1 8.6 13.9 8.6 14.3 8.3L26.3 1.3' })
    )
  );
};

exports.default = EmailIcon;