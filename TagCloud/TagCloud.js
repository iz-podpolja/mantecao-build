'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  margin: 0.4em 0.4em 0.4em 0;\n'], ['\n  display: inline-block;\n  margin: 0.4em 0.4em 0.4em 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tag = require('../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemStyled = _styledComponents2.default.div(_templateObject);

var TagCloud = function TagCloud(_ref) {
  var names = _ref.names,
      _onClickAction = _ref.onClickAction;
  return _react2.default.createElement(
    'div',
    null,
    names.map(function (name, i) {
      return _react2.default.createElement(
        ItemStyled,
        { key: i },
        _onClickAction ? _react2.default.createElement(_Tag2.default, { name: name, onClickAction: function onClickAction(name) {
            return _onClickAction(name);
          } }) : _react2.default.createElement(_Tag2.default, { name: name })
      );
    })
  );
};

TagCloud.propTypes = process.env.NODE_ENV !== "production" ? {
  names: _propTypes2.default.array,
  onClickAction: _propTypes2.default.func
} : {};

exports.default = TagCloud;