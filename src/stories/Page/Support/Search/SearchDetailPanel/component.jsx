import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect'
import ComponentStyle from './style';

import BenefitHistory from 'Page/Support/Search/SearchDetailPanel/BenefitHistory/component'
import ContactHistory from 'Page/Support/Search/SearchDetailPanel/ContactHistory/component'
import EventLog from 'Page/Support/Search/SearchDetailPanel/EventLog/component'
import Feedback from 'Page/Support/Search/SearchDetailPanel/Feedback/component'
import Notes from 'Page/Support/Search/SearchDetailPanel/Notes/component'
import Orders from 'Page/Support/Search/SearchDetailPanel/Orders/component'
import PaymentHistory from 'Page/Support/Search/SearchDetailPanel/PaymentHistory/component'
import PersonalInformation from 'Page/Support/Search/SearchDetailPanel/PersonalInformation/component'
import QuickAccess from 'Page/Support/Search/SearchDetailPanel/QuickAccess/component'
import RDAssessment from 'Page/Support/Search/SearchDetailPanel/RDAssessment/component'
import UserLocations from 'Page/Support/Search/SearchDetailPanel/UserLocations/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, className, details, actions, ...props }) => {
  const [profile, setProfile] = useState(details)

  useDeepCompareEffect(() => setProfile(details), [details])
  
  return (
    <ComponentStyle
      className={className + ' ' + classes.join(' ')}
    >
        <QuickAccess {...profile.user} />
        <div className={'two-column'}>
          <div className={'column'}>
            <Notes {...profile.notes} action={actions.notes} />
            {/* <Orders {...details.orders} />
            <ContactHistory {...details.contacts} />
            <RDAssessment {...details.rd} />                
            <PaymentHistory {...details.payments} /> */}
          </div>
          <div className={'column'}>
            <PersonalInformation {...profile.user} action={actions.personal} />
            {/*<EventLog {...details.events} />
            <UserLocations {...details.user.locations} />
            <Feedback feedback={details.feedback} />        
            <BenefitHistory  {...details.benefits} />*/}  
          </div>
        </div>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component