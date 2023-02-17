import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Table from 'Base/Table/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, action, rows }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Header>Search Result</Header>
      <Panel>
          <Table 
              headers={[{
                  "key":"User ID",
                  "value":"User ID",    
              },{
                  "key":"First Name",
                  "value":"First Name",    
              },{
                  "key":"Last Name",
                  "value":"Last Name",    
              }, {
                  "key":"Phone No",
                  "value":"Phone No",    
              }, {
                  "key":"Date of Birth",
                  "value":"Date of Birth",    
              },{
                  "key":"Action",
                  "value":"Action",    
              }]}
              rows={rows}
              action={action}
          />        
      </Panel>      
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component