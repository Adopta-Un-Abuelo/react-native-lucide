'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNativeSvg = require('react-native-svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Languages = function Languages(props) {
  var color = props.color,
      size = props.size,
      fill = props.fill,
      otherProps = _objectWithoutProperties(props, ['color', 'size', 'fill']);

  return _react2.default.createElement(
    _reactNativeSvg.Svg,
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M5 8l6 6',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M4 14l6-6 2-3',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M2 5h12',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M7 2h1',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M22 22l-5-10-5 10',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M14 18h6',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
};

Languages.propTypes = {
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Languages.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none'
};

exports.default = Languages;