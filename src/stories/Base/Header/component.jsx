import React from 'react';
import { h1, h2, h3 } from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ children, level, classes }) => {
  const ComponentStyle = (level === 1) ? h1 : (level === 2) ? h2 : h3;
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      {children}
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component