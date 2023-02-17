import React from 'react';
import ComponentStyle from './style';
import Paragraph from 'Base/Paragraph/component'
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ onClick, image, name, classes }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
      onClick={onClick}
    >
      <div className={'avatar-image'}>
        <img src={image} alt={name} />
      </div>
      <div className={'avatar-name'}>
        <Paragraph classes={['heavy2', 'medium']}>{name}</Paragraph>
      </div>
      <div className={'avatar-arrow'}>
        <Paragraph classes={['heavy2', 'medium']}>&#9662;</Paragraph>
      </div>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component