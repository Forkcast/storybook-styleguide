import React from 'react';
import ComponentStyle from './style';
import Paragraph from 'Base/Paragraph/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, summary, date, details, ...props }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Paragraph>{summary}</Paragraph>
      <Paragraph>{date}</Paragraph>
      <Paragraph>{details}</Paragraph>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component