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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n'], ['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  max-height: 100%;\n  overflow-y: auto;\n'], ['\n  max-height: 100%;\n  overflow-y: auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledFullscreen = _styledComponents2.default.div(_templateObject);

var StyledContent = _styledComponents2.default.div(_templateObject2);

var Fullscreen = function (_Component) {
  (0, _inherits3.default)(Fullscreen, _Component);

  function Fullscreen() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Fullscreen);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Fullscreen.__proto__ || (0, _getPrototypeOf2.default)(Fullscreen)).call.apply(_ref, [this].concat(args))), _this), _this._onContentClick = function (e) {
      e.stopPropagation();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Fullscreen, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        StyledFullscreen,
        null,
        _react2.default.createElement(
          StyledContent,
          { onClick: this._onContentClick },
          children
        )
      );
    }
  }]);
  return Fullscreen;
}(_react.Component);

Fullscreen.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
} : {};

exports.default = Fullscreen;