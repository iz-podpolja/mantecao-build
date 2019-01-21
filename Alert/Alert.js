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

var _CloseIcon = require('../icons/CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultAlertStyle = {
  boxShadow: '0px 0px 20px ' + _variables.colors.alto,
  width: '100%',
  maxWidth: '500px',
  zIndex: 1,
  margin: '0rem auto',
  backgroundColor: _variables.colors.white,
  textAlign: 'center',
  position: 'relative'
};
var defaultHeaderStyle = {
  height: '20rem',
  width: '100%',
  color: _variables.colors.white
};
var defaultHeadingStyle = {
  margin: '0rem',
  paddingBottom: '1rem',
  fontSize: '1.8rem'
};
var defaultMessageStyle = {
  margin: '0rem',
  fontSize: '1.6rem'
};
var defaultFooterStyle = {
  margin: '0rem',
  fontSize: '1.6rem',
  overflow: 'hidden'
};
var defaultAlertColors = {
  alert: _variables.colors.goldenTainoi,
  error: _variables.colors.amaranth,
  info: _variables.colors.pacificBlue,
  success: _variables.colors.java
};
var defaultAlertIcons = {
  alert: _react2.default.createElement(_WarningIcon2.default, { width: '100%', height: '100%' }),
  error: _react2.default.createElement(_ErrorIcon2.default, { width: '100%', height: '100%' }),
  info: _react2.default.createElement(_InfoIcon2.default, { width: '100%', height: '100%' }),
  success: _react2.default.createElement(_SuccessIcon2.default, { width: '100%', height: '100%' })

  /**
   * (types: alert, error, info, success) with a large icon display, heading, message and body
   */
};
var Alert = function (_Component) {
  (0, _inherits3.default)(Alert, _Component);

  function Alert(props) {
    (0, _classCallCheck3.default)(this, Alert);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Alert.__proto__ || (0, _getPrototypeOf2.default)(Alert)).call(this, props));

    _this.headerStyle = (0, _assign2.default)({}, defaultHeaderStyle, {
      backgroundColor: defaultAlertColors[props.type]
    });
    _this.headingStyle = (0, _assign2.default)({}, defaultHeadingStyle, {
      color: defaultAlertColors[props.type]
    });
    _this.alertIcon = defaultAlertIcons[props.type];
    return _this;
  }

  (0, _createClass3.default)(Alert, [{
    key: 'render',
    value: function render() {
      var closeIcon = _react2.default.createElement(
        'div',
        {
          onClick: this.props.onRemove,
          style: { float: 'right', padding: '0.5rem' }
        },
        _react2.default.createElement(_CloseIcon2.default, null)
      );

      var alert = _react2.default.createElement(
        'div',
        { style: defaultAlertStyle },
        _react2.default.createElement(
          'div',
          { style: this.headerStyle },
          this.props.onClose ? closeIcon : null,
          _react2.default.createElement(
            'div',
            {
              style: { width: '15rem', margin: '0 auto', paddingTop: '2.5rem' }
            },
            this.alertIcon
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { padding: '2rem' } },
          _react2.default.createElement(
            'p',
            { style: this.headingStyle },
            this.props.heading
          ),
          _react2.default.createElement(
            'p',
            { style: defaultMessageStyle },
            this.props.message
          ),
          _react2.default.createElement(
            'div',
            { style: defaultFooterStyle },
            this.props.children
          )
        )
      );
      return this.props.isOpen ? alert : null;
    }
  }]);
  return Alert;
}(_react.Component);

Alert.propTypes = process.env.NODE_ENV !== "production" ? {
  heading: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool.isRequired,
  message: _propTypes2.default.string,
  onRemove: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
} : {};

exports.default = Alert;