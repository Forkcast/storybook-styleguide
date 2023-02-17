import React, { useState } from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  name,
  type, 
  defaultValue, 
  onChange, 
  classes, 
  children,
  editImage,
  disabled,
  ...props 
}) => {
  const [value, setValue] = useState(defaultValue)
  const classNames = classes.join(' ') + (disabled ? ' disabled' : '')
  return (
    <ComponentStyle className={classNames}>
      <label htmlFor={name}>
        {children}
      </label>
      <input 
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e, setValue)}
        disabled={disabled}
        {...props}
      />
      {editImage ? 
      <div className={'edit-icon'}>
        <img src={editImage} alt="Edit" /> 
        <span>Edit</span>
      </div>
    : ''}
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component