import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';

const TextCursorInput = props => {
  const { color, size, fill, strokeWidth, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path
        d="M5.3 4h.9C7.7 4 9 5.3 9 6.7m0 0v10.5c0 1.6-1.1 2.7-2.7 2.7h-1M9 6.7v10.6a2.6 2.6 0 002.7 2.7h1M9 6.7C9 5.2 10.2 4 11.8 4h.9"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1 7.9h6.8c1.1 0 2.1 1 2.1 2.1v4c0 1.1-.9 2.1-2.1 2.1h-6.8"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.8 16.1h-.7C3 16.1 2 15.1 2 14v-4c0-1.1 1-2.1 2.1-2.1h.7"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

TextCursorInput.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextCursorInput.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none',
  strokeWidth: '1',
};

export default TextCursorInput;
