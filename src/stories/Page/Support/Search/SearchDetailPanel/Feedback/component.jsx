import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'
import Button from 'Base/Button/component'

import FeedbackDetail from 'FeedbackDetail/component'
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, feedback, ...props }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
        <Header>Feedback</Header>
        <Button>Write Feedback</Button>
        { feedback.length > 0 ?
          <FeedbackDetail {...feedback[0]} />
        : ''}
        { feedback.length > 1 ?
          <div className="feedback_list">
            <Paragraph classes={['active']}>Read more</Paragraph>
            {feedback.map((item, index) => {
              if (index == 0)
                return;
            
              return (<FeedbackDetail classes={['hidden']} key={`feedback_${index}`} {...item} />)
            })}
          </div>
        : '' }
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component