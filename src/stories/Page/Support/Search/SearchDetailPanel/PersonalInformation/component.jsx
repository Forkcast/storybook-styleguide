import React, { useState, useEffect } from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Button from 'Base/Button/component'
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
   action,
   ...props }) => {
  const [phoneValue, setPhone] = useState(phone)
  const [firstNameValue, setFirstName] = useState(firstName)
  const [lastNameValue, setLastName] = useState(lastName)
  const [emailValue, setEmail] = useState(email)
  const [statusValue, setStatus] = useState(status)
  const [languageValue, setLanguage] = useState(language)
  const [dateOfBirthValue, setDateOfBirth] = useState(dateOfBirth)
  const [locationsValue, setLocations] = useState(locations.primary)
  const [zipValue, setZip] = useState(zip)
  const [eligibilitiesValue, setEligibilities] = useState(eligibilities)

  useEffect(() => {
    setPhone(phone)
    setFirstName(firstName)
    setLastName(lastName)
    setEmail(email)
    setStatus(status)
    setLanguage(language)
    setDateOfBirth(dateOfBirth)
    setLocations(locations.primary)
    setZip(zip)
    setEligibilities(eligibilities)
  }, 
  [
    phone, 
    firstName, 
    lastName, 
    email, 
    status,
    language, 
    dateOfBirth, 
    locations, 
    zip, 
    eligibilities
  ])

  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
        <Header>Personal Information</Header>
        <InputField classes={['form-style']} onChange={(e)=>setPhone(e.target.value)} value={phoneValue} name="phone">Phone No.<span>(Default)</span></InputField>
        <InputField classes={['form-style']} onChange={(e)=>setFirstName(e.target.value)} value={firstNameValue} name="firstName">First Name</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setLastName(e.target.value)} value={lastNameValue} name="lastName">Last Name</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setEmail(e.target.value)} value={emailValue} name="email">Email</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setStatus(e.target.value)} value={statusValue} name="status">Status</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setLanguage(e.target.value)} value={languageValue} name="language">Preferred Language</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirthValue} name="dateOfBirth">Date of Birth</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setLocations(e.target.value)} value={locationsValue} name="primaryLocation">Primary Location</InputField>
        <InputField classes={['form-style']} onChange={(e)=>setZip(e.target.value)} value={zipValue} name="zipCode">ZIP Code</InputField>
        {/*<InputField classes={['form-style']} value={Value} name="eligibility">Eligibility</InputField>*/}
        <Button classes={['secondary']} onClick={(e) => action(
          phoneValue,
          firstNameValue,
          lastNameValue,
          emailValue,
          statusValue,
          languageValue,
          dateOfBirthValue,
          locationsValue,
          zipValue,
          eligibilitiesValue
        )}>Save</Button>
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component