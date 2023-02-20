import React, { useState } from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  name, 
  defaultIndex,
  options, 
  onChange, 
  classes, 
  children,
  disabled,
  ...props 
}) => {
  const [value, setValue] = useState(options[defaultIndex].value)
  const classNames = classes.join(' ') + (disabled ? ' disabled' : '')
  return (
    <ComponentStyle className={classNames}>
      <label htmlFor={name}>
        {children}
      </label>
      <select 
        name={name}
        value={value}
        onChange={(e) => onChange(e, setValue)}
        disabled={disabled}
        {...props}
      >
        {options.map(
            option =>
              <option
                key={option.value} 
                value={option.value} 
              >
                {option.name}
              </option>
        )}
      </select>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component