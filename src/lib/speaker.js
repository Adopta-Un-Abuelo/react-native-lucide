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

const Speaker = props => {
  const { color, size, fill, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Rect
        x="4"
        y="2"
        width="16"
        height="20"
        rx="2"
        ry="2"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <_Circle
        cx="12"
        cy="14"
        r="4"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Line
        x1="12"
        y1="6"
        x2="12.01"
        y2="6"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

Speaker.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speaker.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none',
};

export default Speaker;
