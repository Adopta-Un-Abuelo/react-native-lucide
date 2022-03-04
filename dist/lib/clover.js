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

var Clover = function Clover(props) {
  var color = props.color,
      size = props.size,
      fill = props.fill,
      strokeWidth = props.strokeWidth,
      otherProps = _objectWithoutProperties(props, ['color', 'size', 'fill', 'strokeWidth']);

  return _react2.default.createElement(
    _reactNativeSvg.Svg,
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M16.2 3.8a2.7 2.7 0 00-3.81 0l-.4.38-.4-.4a2.7 2.7 0 00-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z',
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 000 3.81l.38.4-.4.4a2.7 2.7 0 000 3.82C4.85 17.27 6.64 17.33 8 16',
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 000-3.81l-.38-.4.4-.4a2.7 2.7 0 000-3.82C19.15 6.73 17.36 6.67 16 8',
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M7.8 20.2a2.7 2.7 0 003.81 0l.4-.38.4.4a2.7 2.7 0 003.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z',
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M7 17l-5 5',
      fill: fill,
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
};

Clover.propTypes = {
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Clover.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none',
  strokeWidth: '1'
};

exports.default = Clover;