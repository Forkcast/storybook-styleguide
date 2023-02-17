import React from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ image, loading, className, classes, children }) => {
  classes.push(className)
  return (
    <ComponentStyle
      className={'loader ' + classes.join(' ')}
    >
     {loading ?
      <img src={image} alt="Loading..." />
      : children
    } 
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component