import React from 'react';
import Panel from 'Base/Panel/component';
import Header from 'Base/Header/component';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'
import { useState, useEffect } from 'react';

const Component = ({ 
  children, 
  className,
  title,
  onClose, 
  classes, 
  hidden,
  closeIcon,
}) => {
  const hide = hidden ? 'hide' : ''
  return (
    <ComponentStyle
      className={'dialog ' + classes.join(' ') + className + ' ' + hide}
    >
      <div className={'overlay'}>&nbsp;</div>
      <div className={'panel-overlay'}>
        <Panel>
          <div className={'title-row'}>
            <div className={'title'}>
              <Header level={3}>{title}</Header>
            </div>
            <div className={'close'}>
              <img src={closeIcon} onClick={e => onClose(e)} alt="X" />
            </div>
          </div>
          {children}
        </Panel>
      </div>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component