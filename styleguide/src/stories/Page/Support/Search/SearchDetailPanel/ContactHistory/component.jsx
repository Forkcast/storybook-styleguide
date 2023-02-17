import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Button from 'Base/Button/component'
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
          <Header>Contact History</Header>
          <div className="buttons">
            <Button>Send Text</Button>
            <Button>Call</Button>          
          </div>
          <Table 
            headers={[{
              "key":"Date",
              "value":"Date",
            },{
              "key":"Duration",
              "value":"Duration",
            },{
              "key":"Call Type",
              "value":"Call Type",
            },{
              "key":"Caller",
              "value":"Caller",
            },{
              "key":"Receiver",
              "value":"Receiver",
            },{
              "key":"Status",
              "value":"Status",
            }]}
            rows={rows}
          />
        </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component