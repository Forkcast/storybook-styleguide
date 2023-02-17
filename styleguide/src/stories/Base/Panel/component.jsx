import React from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ children, className, classes }) => {
  classes.push(className)
  return (
    <ComponentStyle
      className={'panel ' + classes.join(' ')}
    >
      {children}
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component