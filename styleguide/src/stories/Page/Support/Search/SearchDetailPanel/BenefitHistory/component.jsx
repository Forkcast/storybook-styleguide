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
        <Header>Benefit History</Header>
        <Table 
          headers={[{
            "key":"BenefitName",
            "value":"Benefit Name"
          },{
            "key":"StartDate",
            "value":"Start Date"
          },{
            "key":"EndDate",
            "value":"End Date"
          },{
            "key":"CurrentStatus",
            "value":"Current Status"
          },{
            "key":"NoOrderDelivered",
            "value":"No. of Order Delivered"
          },{
            "key":"Action",
            "value":"Action"
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