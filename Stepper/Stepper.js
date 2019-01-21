'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _Styled = require('./_Styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stepper = function Stepper(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      increaseIcon = _ref.increaseIcon,
      decreaseIcon = _ref.decreaseIcon,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      onDecreaseClick = _ref.onDecreaseClick,
      onIncreaseClick = _ref.onIncreaseClick;

  return _react2.default.createElement(
    _Styled.StyledDiv,
    { disabled: disabled },
    _react2.default.createElement(
      _Styled.StyledChildren,
      { onClick: disabled ? function () {
          return false;
        } : onClick },
      children
    ),
    _react2.default.createElement(
      _Styled.StyledExpander,
      {
        disabled: disabled,
        onClick: disabled ? function () {
          return false;
        } : onClick
      },
      icon || _react2.default.createElement(_icons.ArrowIcon, {
        width: '1em',
        height: '1em',
        style: { strokeWidth: '2.5px' }
      })
    ),
    _react2.default.createElement(
      _Styled.StyledControls,
      null,
      _react2.default.createElement(
        _Styled.StyledStepperButton,
        { onClick: onIncreaseClick, disabled: disabled },
        increaseIcon || _react2.default.createElement(_icons.ArrowIcon, {
          width: '1em',
          height: '1em',
          style: { strokeWidth: '2.5px' },
          mirrorX: true
        })
      ),
      _react2.default.createElement(
        _Styled.StyledStepperButton,
        { onClick: onDecreaseClick, disabled: disabled },
        increaseIcon || _react2.default.createElement(_icons.ArrowIcon, {
          width: '1em',
          height: '1em',
          style: { strokeWidth: '2.5px' }
        })
      )
    )
  );
};

Stepper.PropTypes = {
  children: _propTypes2.default.node.isRequired,
  decreaseIcon: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  icon: _propTypes2.default.node,
  increaseIcon: _propTypes2.default.node,
  onClick: _propTypes2.default.function,
  onDecreaseClick: _propTypes2.default.function,
  onIncreaseClick: _propTypes2.default.function
};

exports.default = Stepper;