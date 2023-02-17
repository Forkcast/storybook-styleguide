import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import InputField from 'Base/InputField/component'
import Button from 'Base/Button/component'
import SearchResult from 'Page/Support/Search/SearchResult/component'
import SearchDetailPanel from 'Page/Support/Search/SearchDetailPanel/component'

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
  classes,
  className,
  resultClasses,
  detailClasses,
}) => {
  return (    
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Header>Support</Header>
      <Panel className={className}>
        <Header>User Detail Search</Header>
        <div className={'search-container'}>
          <InputField onChange={searchActions.onChange} name="search">Search by Name, Phone Number, User ID, CIN or SSN</InputField>
          <Button onClick={searchActions.onSubmit}>Search</Button>
        </div>
      </Panel>      
      <SearchResult rows={results} action={resultActions} classes={resultClasses} />
      <SearchDetailPanel actions={detailActions} details={details} classes={detailClasses} />  
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component