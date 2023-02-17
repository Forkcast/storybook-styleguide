import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'
import Button from 'Base/Button/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  classes, 
  userId,
  firstName,
  lastName,
  eligibilities,
  ...props 
}) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
        <Header>{userId} - {firstName} {lastName}</Header>
        <Paragraph><strong>Eligibility:</strong> {eligibilities.join(' ,')}</Paragraph>
        <Paragraph>Quick access</Paragraph>
        <div className={'quick-access-buttons'}>
          <Button classes={['secondary']}>RD Assessment</Button>
          <Button classes={['secondary']}>Contact History</Button>
          <Button classes={['secondary']}>User Locations</Button>
          <Button classes={['secondary']}>Feedback</Button>
          <Button classes={['secondary']}>Open in Intercom</Button>
        </div>
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component