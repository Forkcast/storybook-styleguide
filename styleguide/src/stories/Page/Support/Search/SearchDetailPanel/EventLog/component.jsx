import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Table from 'Base/Table/component'

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
      <Header>Event Log</Header>    
      <Table 
        headers={[{
            "key":"Event",
            "value": "Event"
          },{
            "key":"Date",
            "value": "Date"
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