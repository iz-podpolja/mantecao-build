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

var _SuccessIcon = require('../icons/SuccessIcon');

var _SuccessIcon2 = _interopRequireDefault(_SuccessIcon);

var _ErrorIcon = require('../icons/ErrorIcon');

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _WarningIcon = require('../icons/WarningIcon');

var _WarningIcon2 = _interopRequireDefault(_WarningIcon);

var _InfoIcon = require('../icons/InfoIcon');

var _InfoIcon2 = _interopRequireDefault(_InfoIcon);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultAlertStyle = {
  width: '100%',
  backgroundColor: _variables.colors.white,
  textAlign: 'left',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: _variables.colors.white,
  borderRadius: '4px'
};
var defaultIconStyle = {
  color: _variables.colors.white,
  display: 'table-cell',
  marginRight: '1.5rem',
  padding: '0.5rem'
};
var defaultAlertColors = {
  alert: _variables.colors.goldenTainoi,
  error: _variables.colors.amaranth,
  info: _variables.colors.pacificBlue,
  success: _variables.colors.java
};
var defaultAlertIcons = {
  alert: _react2.default.createElement(_WarningIcon2.default, null),
  error: _react2.default.createElement(_ErrorIcon2.default, null),
  info: _react2.default.createElement(_InfoIcon2.default, null),
  success: _react2.default.createElement(_SuccessIcon2.default, null)
};
var defaultChildrenStyle = {
  padding: '0.5rem 1rem',
  display: 'table-cell',
  verticalAlign: 'middle'

  /**
   * (types: alert, error, info) with a small icon display and message body
   */
};
var InlineAlert = function (_Component) {
  (0, _inherits3.default)(InlineAlert, _Component);

  function InlineAlert(props) {
    (0, _classCallCheck3.default)(this, InlineAlert);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InlineAlert.__proto__ || (0, _getPrototypeOf2.default)(InlineAlert)).call(this, props));

    _this.alertStyle = (0, _assign2.default)({}, defaultAlertStyle, {
      borderColor: defaultAlertColors[props.type]
    });
    _this.iconStyle = (0, _assign2.default)({}, defaultIconStyle, {
      backgroundColor: defaultAlertColors[props.type]
    });
    _this.alertIcon = defaultAlertIcons[props.type];
    return _this;
  }

  (0, _createClass3.default)(InlineAlert, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.alertStyle },
        _react2.default.createElement(
          'span',
          { style: this.iconStyle },
          this.alertIcon
        ),
        _react2.default.createElement(
          'span',
          { style: defaultChildrenStyle },
          this.props.children
        )
      );
    }
  }]);
  return InlineAlert;
}(_react.Component);

InlineAlert.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  type: _propTypes2.default.string.isRequired
} : {};

exports.default = InlineAlert;