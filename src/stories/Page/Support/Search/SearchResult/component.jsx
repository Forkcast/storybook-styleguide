import React from 'react';
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Table from 'Base/Table/component'
import Loader from 'Base/Loader/component'
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, action, rows, loading }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Loader loading={loading}>
  
        <Header>Search Result</Header>
        <Panel>
            <Table 
              empty={'No results matched your search pattern.'}
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
      </Loader>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component