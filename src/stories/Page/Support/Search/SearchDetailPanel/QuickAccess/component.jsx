import React, { useEffect } from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'
import Button from 'Base/Button/component'
import Loader from 'Base/Loader/component'
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  classes, 
  loading,
  userId,
  firstName,
  lastName,
  eligibilities,
  buttonClick,
}) => {

  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
        <Loader loading={loading}>
          <div className={'header-block'}>
            <Header level={2}>{userId} - {firstName} {lastName}</Header>
            <Paragraph><strong>Eligibility:</strong> {eligibilities.join(' ,')}</Paragraph>
          </div>
          {/*
          <Paragraph>Quick access</Paragraph>
          <div className={'quick-access-buttons'}>
            <Button onClick={(e) => buttonClick(e, 'rdAssess')} classes={['secondary']}>RD Assessment</Button>
            <Button onClick={(e) => buttonClick(e, 'contactHistory')} classes={['secondary']}>Contact History</Button>
            <Button onClick={(e) => buttonClick(e, 'locations')} classes={['secondary']}>User Locations</Button>
            <Button onClick={(e) => buttonClick(e, 'feedback')} classes={['secondary']}>Feedback</Button>
            <Button onClick={(e) => buttonClick(e, 'intercom')} classes={['secondary']}>Open in Intercom</Button>
          </div>*/}
        </Loader>
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component