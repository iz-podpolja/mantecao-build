'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: ', ';\n  background-color: ', ';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1001;\n'], ['\n  display: ', ';\n  background-color: ', ';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1001;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _KeyCodeListener = require('../KeyCodeListener');

var _KeyCodeListener2 = _interopRequireDefault(_KeyCodeListener);

var _variables = require('../variables');

var _Fullscreen = require('./_Fullscreen');

var _Fullscreen2 = _interopRequireDefault(_Fullscreen);

var _Anchored = require('./_Anchored');

var _Anchored2 = _interopRequireDefault(_Anchored);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.show ? 'block' : 'none';
}, function (props) {
  return props.showBackdrop ? 'rgba(0, 0, 0, 0.5)' : 'transparent';
});

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call.apply(_ref, [this].concat(args))), _this), _this._requestClose = function () {
      var onClose = _this.props.onClose;

      onClose();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popover, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorEl = _props.anchorEl,
          children = _props.children,
          show = _props.show,
          showBackdrop = _props.showBackdrop;

      return _react2.default.createElement(
        StyledContainer,
        {
          show: show,
          showBackdrop: showBackdrop,
          onClick: this._requestClose
        },
        show && _react2.default.createElement(_KeyCodeListener2.default, { onEsc: this._requestClose }),
        anchorEl ? _react2.default.createElement(
          _Anchored2.default,
          { show: show, anchorEl: anchorEl },
          children
        ) : _react2.default.createElement(
          _Fullscreen2.default,
          null,
          children
        )
      );
    }
  }]);
  return Popover;
}(_react.Component);

Popover.propTypes = process.env.NODE_ENV !== "production" ? {
  anchorEl: _propTypes2.default.object,
  show: _propTypes2.default.bool,
  showBackdrop: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
} : {};

exports.default = Popover;