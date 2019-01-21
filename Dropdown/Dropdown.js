'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultContainerStyle = {
  position: 'relative',
  display: 'inline-block'
};

var defaultChildrenStyle = {
  position: 'absolute',
  background: _variables.colors.white,
  border: '1px solid',
  borderColor: _variables.colors.pacificBlue,
  boxShadow: '0px 2px 7px rgba(0,0,0,.25)',
  minWidth: '100%',
  zIndex: 1000
};
var centerChildren = { left: '50%', transform: 'translate(-50%, 0)' };
var leftChildren = { left: 0 };
var rightChildren = { right: 0 };

var defaultTriggerStyle = {
  width: '100%'
};

var defaultBorderArrow = {
  bottom: '-6px',
  left: '50%',
  border: 'solid transparent',
  height: '0px',
  width: '0px',
  position: 'absolute',
  pointerEvents: 'none',
  borderBottomColor: _variables.colors.pacificBlue,
  borderWidth: '6px',
  marginLeft: '-6px',
  zIndex: 1001
};

var defaultBackgroundArrow = {
  bottom: '-6px',
  left: '50%',
  border: 'solid transparent',
  height: '0px',
  width: '0px',
  position: 'absolute',
  pointerEvents: 'none',
  borderBottomColor: _variables.colors.white,
  borderWidth: '5px',
  marginLeft: '-5px',
  zIndex: 1002
};

var Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      openDropdown: function openDropdown() {
        return _this.setState({ isOpen: true });
      },
      closeDropdown: function closeDropdown() {
        return _this.setState({ isOpen: false });
      }
    }, _this._onWindowClick = function (e) {
      var _this$props = _this.props,
          closeOnClick = _this$props.closeOnClick,
          disabled = _this$props.disabled;

      var _this$_getControls = _this._getControls(),
          closeDropdown = _this$_getControls.closeDropdown;

      if (!_this.refs.container.contains(e.target)) {
        closeDropdown();
      }
    }, _this._onContainerClick = function (e) {
      var _this$props2 = _this.props,
          closeOnClick = _this$props2.closeOnClick,
          disabled = _this$props2.disabled;

      var _this$_getControls2 = _this._getControls
      // then explicitly call an action based on state/prop conditions
      (),
          isOpen = _this$_getControls2.isOpen,
          openDropdown = _this$_getControls2.openDropdown,
          closeDropdown = _this$_getControls2.closeDropdown;

      if (isOpen && (closeOnClick || disabled)) {
        closeDropdown();
      } else if (!isOpen && !disabled) {
        openDropdown();
      }
    }, _this._getControls = function () {
      var _this2 = _this[_this._hasExternalControls() ? 'props' : 'state'],
          openDropdown = _this2.openDropdown,
          closeDropdown = _this2.closeDropdown,
          isOpen = _this2.isOpen;

      return { openDropdown: openDropdown, isOpen: isOpen, closeDropdown: closeDropdown };
    }, _this._hasExternalControls = function () {
      // only if we have full controll from outside can use use props
      var _this$props3 = _this.props,
          openDropdown = _this$props3.openDropdown,
          closeDropdown = _this$props3.closeDropdown,
          isOpen = _this$props3.isOpen;

      return openDropdown !== undefined && closeDropdown !== undefined && isOpen !== undefined;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          triggerNode = _props.triggerNode,
          disabled = _props.disabled,
          left = _props.left,
          right = _props.right,
          center = _props.center,
          arrow = _props.arrow,
          lockWidth = _props.lockWidth,
          fullWidth = _props.fullWidth,
          borderColor = _props.borderColor,
          backgroundColor = _props.backgroundColor,
          closeOnClick = _props.closeOnClick;

      var _getControls = this._getControls(),
          isOpen = _getControls.isOpen,
          openDropdown = _getControls.openDropdown;

      var computedContainerStyle = (0, _assign2.default)({}, defaultContainerStyle, fullWidth ? { width: '100%' } : {});

      var computedTriggerStyle = (0, _assign2.default)({}, defaultTriggerStyle, {
        cursor: disabled ? 'not-allowed' : 'pointer'
      });

      var computedChildrenStyle = (0, _assign2.default)({}, defaultChildrenStyle, borderColor ? { borderColor: borderColor } : {}, backgroundColor ? { backgroundColor: backgroundColor } : {}, arrow ? { marginTop: '5px' } : {}, left ? leftChildren : {}, right ? rightChildren : {}, center ? centerChildren : {}, lockWidth ? { maxWidth: '100%' } : {});

      var computedBackgroundArrow = (0, _assign2.default)({}, defaultBackgroundArrow, backgroundColor ? { borderBottomColor: backgroundColor } : {});

      var computedBorderArrow = (0, _assign2.default)({}, defaultBorderArrow, borderColor ? { borderBottomColor: borderColor } : {});

      var ArrowThing = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { style: computedBorderArrow }),
        _react2.default.createElement('div', { style: computedBackgroundArrow })
      );
      return _react2.default.createElement(
        'div',
        {
          ref: 'container',
          onClick: this._onContainerClick,
          style: computedContainerStyle
        },
        isOpen ? _react2.default.createElement(_reactEventListener2.default, { target: window, onClick: this._onWindowClick }) : null,
        _react2.default.createElement(
          'div',
          { style: computedTriggerStyle },
          triggerNode
        ),
        arrow && isOpen ? ArrowThing : null,
        isOpen ? _react2.default.createElement(
          'div',
          { style: computedChildrenStyle },
          children
        ) : null
      );
    }
  }]);
  return Dropdown;
}(_react.Component);

Dropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  arrow: _propTypes2.default.bool,
  backgroundColor: _propTypes2.default.string,
  borderColor: _propTypes2.default.string,
  center: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  closeOnClick: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  lockWidth: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  triggerNode: _propTypes2.default.node.isRequired
} : {};

exports.default = Dropdown;