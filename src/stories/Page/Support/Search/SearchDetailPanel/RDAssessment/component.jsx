import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'
import InputField from 'Base/InputField/component'
import Button from 'Base/Button/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  classes, 
  assessmentId,
  details,
  ...props 
}) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
      <Header>RD Assessment</Header>
      <Button>Send</Button>
      <div className={'tabs'}>
        <Paragraph classes={['active']}>Upcoming</Paragraph>
        <Paragraph>Past</Paragraph>
      </div>

      <div className={'fields'}>
        <InputField classes={['form-style']} name="assessment_id" value={assessmentId}>Assessment ID</InputField>
        <InputField classes={['form-style']} name="details_assessment" value={details}>Details RD Assessment</InputField>
      </div>
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component