import React from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ children, classes }) => {
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