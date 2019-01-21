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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyCodeListener = function (_Component) {
  (0, _inherits3.default)(KeyCodeListener, _Component);

  function KeyCodeListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, KeyCodeListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = KeyCodeListener.__proto__ || (0, _getPrototypeOf2.default)(KeyCodeListener)).call.apply(_ref, [this].concat(args))), _this), _this._onKeyDown = function (e) {
      switch (e.keyCode) {
        case 9:
          // TAB
          if (_this.props.onTab) {
            _this.props.onTab();
          }
          break;
        case 13:
          // ENTER
          e.preventDefault // prevent default behavior
          ();if (_this.props.onEnter) {
            _this.props.onEnter();
          }
          break;
        case 27:
          // ESCAPE
          if (_this.props.onEsc) {
            _this.props.onEsc();
          }
          break;
        case 37:
          // LEFT
          if (_this.props.onLeft) {
            _this.props.onLeft();
          }
          break;
        case 38:
          // UP
          if (_this.props.onUp) {
            _this.props.onUp();
          }
          break;
        case 39:
          // RIGHT
          if (_this.props.onRight) {
            _this.props.onRight();
          }
          break;
        case 40:
          // DOWN
          if (_this.props.onDown) {
            _this.props.onDown();
          }
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(KeyCodeListener, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactEventListener2.default, { target: window, onKeyDown: this._onKeyDown })
      );
    }
  }]);
  return KeyCodeListener;
}(_react.Component);

KeyCodeListener.propTypes = process.env.NODE_ENV !== "production" ? {
  onDown: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onEsc: _propTypes2.default.func,
  onLeft: _propTypes2.default.func,
  onRight: _propTypes2.default.func,
  onTab: _propTypes2.default.func,
  onUp: _propTypes2.default.func
} : {};

exports.default = KeyCodeListener;