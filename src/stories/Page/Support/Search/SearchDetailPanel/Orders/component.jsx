import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  classes, 
  orderTotalCount,
  orders,
  currentCount,
  upcomingCount,
  pastCount,
  ...props 
}) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    > 
      <Panel>
        <Header>Orders ({orderTotalCount})</Header>
        <div className={'tabs'}>
          <Paragraph>Current ({currentCount})</Paragraph>
          <Paragraph>Upcoming ({upcomingCount})</Paragraph>
          <Paragraph>Past ({pastCount})</Paragraph>
        </div>
        <div>
          {orders.map(order =>         
            <div key={order.orderNumber} className={'order-block'}>
              <div className={'order-summary'}>
                <Paragraph>Order No. {order.orderNumber}</Paragraph>
                <Paragraph>Status: {order.orderStatus}</Paragraph>
                <Paragraph>Meal: {order.meal.join(', ')}</Paragraph>
                <Paragraph>Benefit: {order.benefit} | Funder: {order.funder}</Paragraph>
                <Paragraph>View Details</Paragraph>
              </div>
              <div className={'delivery-summary'}>
                <Paragraph>Expected Delivery: {order.expectedDelivery}</Paragraph>
                <Paragraph>Issue created: {order.issueCreated}</Paragraph>
                <Paragraph>Tracking No: {order.trackingNumber}</Paragraph> Copy Goes here
                <Paragraph>Tracking Link: <a href={order.trackingLink} target="_blank">Click to view</a> </Paragraph>
              </div>
            </div>
          )}          
        </div>
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component