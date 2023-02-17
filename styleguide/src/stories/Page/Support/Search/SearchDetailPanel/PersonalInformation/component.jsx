import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Paragraph from 'Base/Paragraph/component'
import InputField from 'Base/InputField/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({
   classes,
   phone,
   firstName,
   lastName,
   email,
   status,
   language,
   dateOfBirth,   
   locations,
   zip,
   eligibilities,
   ...props }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
        <Header>Personal Information</Header>
        <InputField classes={['form-style']} value={phone} name="phone">Phone No.<span>(Default)</span></InputField>
        <InputField classes={['form-style']} value={firstName} name="firstName">First Name</InputField>
        <InputField classes={['form-style']} value={lastName} name="lastName">Last Name</InputField>
        <InputField classes={['form-style']} value={email} name="email">Email</InputField>
        <InputField classes={['form-style']} value={status} name="status">Status</InputField>
        <InputField classes={['form-style']} value={language} name="language">Preferred Language</InputField>
        <InputField classes={['form-style']} value={dateOfBirth} name="dateOfBirth">Date of Birth</InputField>
        <InputField classes={['form-style']} value={locations.primary} name="primaryLocation">Primary Location</InputField>
        <InputField classes={['form-style']} value={zip} name="zipCode">ZIP Code</InputField>
        <InputField classes={['form-style']} value={eligibilities.join(', ')} name="eligibility">Eligibility</InputField>
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component