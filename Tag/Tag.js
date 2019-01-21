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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 0.35em;\n\n  &:hover {\n    color: rgba(188, 33, 63, 1);\n  }\n'], ['\n  cursor: pointer;\n  display: inline-block;\n  margin-left: 0.35em;\n\n  &:hover {\n    color: rgba(188, 33, 63, 1);\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border: ', ';\n  border-left: 4px solid;\n  border-left-color: ', ';\n  border-radius: 2px;\n  color: ', ';\n  display: inline-block;\n  font-size: 12px;\n  padding-right: 0.7em;\n'], ['\n  background-color: ', ';\n  border: ', ';\n  border-left: 4px solid;\n  border-left-color: ', ';\n  border-radius: 2px;\n  color: ', ';\n  display: inline-block;\n  font-size: 12px;\n  padding-right: 0.7em;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  padding: 0.5em 0.1em 0.5em 0.8em;\n'], ['\n  display: inline-block;\n  padding: 0.5em 0.1em 0.5em 0.8em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

var _CloseIcon = require('../icons/CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseSpan = _styledComponents2.default.span(_templateObject);

var TagDiv = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.hovered ? 'rgba(188, 33, 63, 0.2)' : 'rgba(248,193,80, 0.2)';
}, function (props) {
  return props.hovered ? '1px solid rgba(248,193,80, 0.2)' : '1px solid rgba(188, 33, 63, 0.3)';
}, function (props) {
  return props.hovered ? 'rgba(188, 33, 63, 1)' : _variables.colors.goldenTainoi;
}, function (props) {
  return props.hovered ? _variables.colors.emperor : _variables.colors.dustyGray;
});

var TagSpan = _styledComponents2.default.span(_templateObject3);

var AdjustedCloseIcon = _react2.default.createElement(_CloseIcon2.default, {
  style: {
    height: '1.2em',
    width: '1.2em',
    strokeWidth: '2.5px',
    marginBottom: '0.2em'
  }
});

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tag, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          onClickAction = _props.onClickAction;


      return _react2.default.createElement(
        TagDiv,
        { hovered: this.state.hovered },
        _react2.default.createElement(
          TagSpan,
          null,
          name
        ),
        onClickAction && _react2.default.createElement(
          CloseSpan,
          {
            onClick: function onClick() {
              return onClickAction(name);
            },
            onMouseEnter: function onMouseEnter() {
              _this2.setState({ hovered: true });
            },
            onMouseLeave: function onMouseLeave() {
              _this2.setState({ hovered: false });
            }
          },
          AdjustedCloseIcon
        )
      );
    }
  }]);
  return Tag;
}(_react.Component);

Tag.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  onClickAction: _propTypes2.default.func
} : {};

exports.default = Tag;