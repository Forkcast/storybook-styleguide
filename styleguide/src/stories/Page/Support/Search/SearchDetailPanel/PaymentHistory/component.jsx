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
        <Header>Payment History</Header>
        <Table 
          headers={[{
            "key": "OrderNo",
            "value": "Order No.",
          },{
            "key": "Date",
            "value": "Date",
          },{
            "key": "Benefit",
            "value": "Benefit",
          },{
            "key": "TransactionNo",
            "value": "Transaction No.",
          },{
            "key": "PaymentMethod",
            "value": "Payment Method",
          },{
            "key": "Amount",
            "value": "Amount",
          },{
            "key": "Status",
            "value": "Status",
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