'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n'], ['\n  position: fixed;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledAnchoredContent = _styledComponents2.default.div(_templateObject);

var Anchored = function (_Component) {
  (0, _inherits3.default)(Anchored, _Component);

  function Anchored() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Anchored);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Anchored.__proto__ || (0, _getPrototypeOf2.default)(Anchored)).call.apply(_ref, [this].concat(args))), _this), _this._setPosition = function () {
      var anchorEl = _this.props.anchorEl;

      var _this$_getPosition = _this._getPosition(),
          bottom = _this$_getPosition.bottom,
          left = _this$_getPosition.left,
          width = _this$_getPosition.width,
          height = _this$_getPosition.height;

      var el = (0, _reactDom.findDOMNode)(_this.refs.anchored);
      el.style.top = bottom + 'px';
      el.style.left = left + 'px';
      el.style.width = width + 'px';
      el.style.height = height + 'px';
    }, _this._getPosition = function () {
      var anchorEl = _this.props.anchorEl;

      var rect = anchorEl.getBoundingClientRect();
      return (0, _defineProperty3.default)({
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
        width: anchorEl.clientWidth
      }, 'right', anchorEl.clientHeight);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Anchored, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setPosition();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          show = _props.show;

      return _react2.default.createElement(
        'div',
        null,
        show && _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this._setPosition }),
        show && _react2.default.createElement(_reactEventListener2.default, { target: 'window', onScroll: this._setPosition }),
        _react2.default.createElement(
          StyledAnchoredContent,
          { ref: 'anchored' },
          children
        )
      );
    }
  }]);
  return Anchored;
}(_react.Component);

Anchored.propTypes = process.env.NODE_ENV !== "production" ? {
  anchorEl: _propTypes2.default.object,
  show: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
} : {};

exports.default = Anchored;