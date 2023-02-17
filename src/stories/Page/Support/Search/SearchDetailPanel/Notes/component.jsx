import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'
import Table from 'Base/Table/component'
import Button from 'Base/Button/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, rows, ...props }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
    <Panel>
      <Header>Notes</Header>
      <Button>Add Note</Button>
      <Table 
        headers={[{
            "key":"Note",
            "value": "Note"
          },{
            "key":"Note type",
            "value": "Note type"
          },
          {
            "key":"Created by",
            "value": "Created by"
          },
          {
            "key":"Created at",
            "value": "Created at"
          }
        ]}
        rows={rows}
      />
    </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component