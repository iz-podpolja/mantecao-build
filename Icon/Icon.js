'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  display: 'inline-block',
  strokeWidth: 1.5,
  fill: 'none',
  stroke: 'currentColor',
  pointerEvents: 'none',
  height: _variables.iconSizes.medium,
  width: _variables.iconSizes.medium,
  verticalAlign: 'middle'
};

var xsmall = {
  height: _variables.iconSizes.xsmall,
  width: _variables.iconSizes.xsmall
};

var small = {
  height: _variables.iconSizes.small,
  width: _variables.iconSizes.small
};

var large = {
  height: _variables.iconSizes.large,
  width: _variables.iconSizes.large

  /**
   * Renders SVGs and applies some transforms (mirrorX/Y) - Small and large
   */
};var Icon = function Icon(props) {
  var componentStyle = (0, _assign2.default)({}, defaultStyle
  // assign new values from any styles passed as props
  );(0, _assign2.default)(componentStyle, props.style
  // handle width
  );if (props.xsmall) {
    (0, _assign2.default)(componentStyle, xsmall);
  } else if (props.small) {
    (0, _assign2.default)(componentStyle, small);
  } else if (props.large) {
    (0, _assign2.default)(componentStyle, large);
  }

  // handle explicit width/height
  if (props.width) {
    (0, _assign2.default)(componentStyle, { width: props.width });
  }
  if (props.height) {
    (0, _assign2.default)(componentStyle, { height: props.height });
  }

  // handle mirroring (done at path group level)
  var transform = '';
  if (props.mirrorX) {
    transform = 'translate(0, 32) scale(1, -1)';
  } else if (props.mirrorY) {
    transform = 'translate(32) scale(-1, 1)';
  }

  // handle rotation (done at svg level)
  if (props.rotate) {
    (0, _assign2.default)(componentStyle, {
      transform: 'rotate(' + props.rotate + 'deg)'
    });
  }

  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 32 32', style: componentStyle, className: props.className },
    _react2.default.createElement(
      'g',
      { transform: transform || props.transform },
      props.children
    )
  );
};

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  large: _propTypes2.default.bool,
  mirrorX: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  xsmall: _propTypes2.default.bool
} : {};

exports.default = Icon;