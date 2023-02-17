import React from 'react';
import ComponentStyle from './style';

import BenefitHistory from 'BenefitHistory/component'
import ContactHistory from 'ContactHistory/component'
import EventLog from 'EventLog/component'
import Feedback from 'Feedback/component'
import Notes from 'Notes/component'
import Orders from 'Orders/component'
import PaymentHistory from 'PaymentHistory/component'
import PersonalInformation from 'PersonalInformation/component'
import QuickAccess from 'QuickAccess/component'
import RDAssessment from 'RDAssessment/component'
import UserLocations from 'UserLocations/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, details, actions, ...props }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
        <QuickAccess {...details.user} actions={actions.quickAccess} />
        <div className="two-column">
          <Notes {...details.notes} actions={actions.notes} />
          <EventLog {...details.events} />
          <Orders {...details.orders} />
          <PersonalInformation {...details.user} />
          <ContactHistory {...details.contacts} />
          <UserLocations {...details.user.locations} />
          <RDAssessment {...details.rd} />                
          <Feedback feedback={details.feedback} />        
          <PaymentHistory {...details.payments} />
          <BenefitHistory  {...details.benefits} />        
        </div>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component