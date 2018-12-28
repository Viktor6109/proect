import React from 'react';

const Logo = ({ image = '', width = 60, height = 60 }) => (
  <img src={image} alt="logo" width={width} height={height} />
);

export default Logo;
