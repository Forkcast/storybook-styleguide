import React from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ onClick, children, disabled, classes }) => {
  return (
    <ComponentStyle
      type="button"
      className={classes.join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component