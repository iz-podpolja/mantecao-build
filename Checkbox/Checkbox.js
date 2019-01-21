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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['display: flex;'], ['display: flex;']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 0 1 auto;\n  margin-right: 1em;\n'], ['\n  flex: 0 1 auto;\n  margin-right: 1em;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['flex: 1 1 auto;'], ['flex: 1 1 auto;']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['padding-top: 0.3em;'], ['padding-top: 0.3em;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  cursor: ', ';\n'], ['\n  display: flex;\n  cursor: ', ';\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: 2px;\n  color: ', ';\n  cursor: ', ';\n  display: flex;\n  opacity: ', ';\n  padding: 0.1em;\n'], ['\n  background: ', ';\n  border: 1px solid ', ';\n  border-radius: 2px;\n  color: ', ';\n  cursor: ', ';\n  display: flex;\n  opacity: ', ';\n  padding: 0.1em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div(_templateObject);
var CheckboxDiv = _styledComponents2.default.div(_templateObject2);
var LabelDiv = _styledComponents2.default.div(_templateObject3);
var ChildrenDiv = _styledComponents2.default.div(_templateObject4);
var LabelText = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.clickable ? 'pointer' : 'inherit';
});
var CheckboxButton = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.checked ? props.color : _variables.colors.white;
}, function (props) {
  return props.checked ? props.color : 'currentColor';
}, function (props) {
  return props.checked ? _variables.colors.white : 'currentColor';
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.disabled ? '0.5' : '1';
});

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox(props) {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));

    _this._toggleCheckbox = function () {
      var onChange = _this.props.onChange;

      if (!_this.props.disabled) {
        _this.setState({ checked: !_this.state.checked }, function () {
          onChange(_this.state.checked);
        });
      }
    };

    _this.state = {
      checked: props.checked
    };
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== undefined) {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          label = _props.label,
          color = _props.color,
          children = _props.children,
          allowLabelClick = _props.allowLabelClick;

      return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          CheckboxDiv,
          null,
          _react2.default.createElement(
            CheckboxButton,
            {
              color: color,
              disabled: disabled,
              checked: this.state.checked,
              onClick: this._toggleCheckbox
            },
            this.state.checked === true ? _react2.default.createElement(_icons.CheckIcon, {
              style: {
                width: '1.2em',
                height: '1.2em',
                strokeWidth: '2.5px'
              }
            }) : _react2.default.createElement(_icons.BlankIcon, { style: { width: '1.2em', height: '1.2em' } })
          )
        ),
        _react2.default.createElement(
          LabelDiv,
          null,
          label && _react2.default.createElement(
            LabelText,
            {
              clickable: allowLabelClick && !disabled,
              onClick: disabled ? function () {
                return false;
              } : this._toggleCheckbox
            },
            label
          ),
          children && _react2.default.createElement(
            ChildrenDiv,
            null,
            children
          )
        )
      );
    }
  }]);
  return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
  color: _variables.colors.blueBayoux
};

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  allowLabelClick: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onChange: _propTypes2.default.func.isRequired
} : {};

exports.default = Checkbox;