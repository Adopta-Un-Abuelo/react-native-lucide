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

var Loader = function Loader(props) {
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
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '12',
      y1: '2',
      x2: '12',
      y2: '6',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '12',
      y1: '18',
      x2: '12',
      y2: '22',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '4.93',
      y1: '4.93',
      x2: '7.76',
      y2: '7.76',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '16.24',
      y1: '16.24',
      x2: '19.07',
      y2: '19.07',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '2',
      y1: '12',
      x2: '6',
      y2: '12',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '18',
      y1: '12',
      x2: '22',
      y2: '12',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '4.93',
      y1: '19.07',
      x2: '7.76',
      y2: '16.24',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '16.24',
      y1: '7.76',
      x2: '19.07',
      y2: '4.93',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
};

Loader.propTypes = {
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Loader.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none'
};

exports.default = Loader;