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

const Image = props => {
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
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        ry="2"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <_Circle
        cx="8.5"
        cy="8.5"
        r="1.5"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points="21 15 16 10 5 21"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

Image.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none',
};

export default Image;
