import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import InputField from 'Base/InputField/component'
import Button from 'Base/Button/component'
import SearchResult from 'SearchResult/component'
import SearchDetailPanel from 'SearchDetailPanel/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  results, 
  details, 
  searchActions, 
  resultActions, 
  detailActions, 
  classes 
}) => {
  return (    
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Header>Support</Header>
      <Panel>
        <Header>User Detail Search</Header>
        <InputField name="search">Search by Name, Phone Number, User ID, CIN or SSN</InputField>
        <Button onClick={searchActions}>Search</Button>
      </Panel>      
      { results.length > 0 && !details ?
        <SearchResult rows={results} />
      : ''}
      {details ? 
        <SearchDetailPanel actions={detailActions} details={details} />  
      : ''}
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component