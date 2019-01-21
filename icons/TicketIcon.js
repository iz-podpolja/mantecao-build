'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TicketIcon = function TicketIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { transform: 'translate(-3.5, -4.5)' },
      _react2.default.createElement('path', { d: 'M27.76 35.7C28.32 35.7 28.77 35.26 28.77 34.7L28.77 6C28.77 5.45 28.32 5 27.77 5L23.89 5C23.34 5 22.79 5.44 22.6 5.96 22.6 5.96 22.46 7.83 20.07 7.82 17.68 7.82 17.55 5.97 17.55 5.97 17.39 5.45 16.82 5.03 16.26 5.04L12.01 5.07C11.45 5.07 11 5.53 11 6.08L11 34.7C11 35.25 11.44 35.7 12.01 35.7M12.01 5.07C11.45 5.07 11 5.53 11 6.08L11 34.7C11 35.25 11.44 35.7 12 35.7L15.88 35.7C16.44 35.7 17 35.26 17.2 34.76 17.2 34.76 17.35 33.05 19.71 33.07 22.07 33.1 22.16 34.76 22.16 34.76 22.32 35.28 22.91 35.7 23.46 35.7L27.77 35.7C28.32 35.7 28.77 35.26 28.77 34.7L28.77 6C28.77 5.45 28.32 5 27.77 5L23.89 5C23.34 5 22.79 5.44 22.6 5.96 22.6 5.96 22.46 7.83 20.07 7.82 17.68 7.82 17.55 5.97 17.55 5.97 17.39 5.45 16.82 5.03 16.26 5.04L12.01 5.07ZM11.5 29.5L28.53 29.5M11.5 11.5L28.53 11.5' })
    )
  );
};

exports.default = TicketIcon;