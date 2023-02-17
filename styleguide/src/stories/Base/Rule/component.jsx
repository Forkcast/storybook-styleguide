import React from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ width, offset, classes }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
      style={{ "width": width, "left": offset}}
    />
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component