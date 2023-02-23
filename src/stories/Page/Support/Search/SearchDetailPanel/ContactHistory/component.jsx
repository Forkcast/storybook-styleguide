import React , { useState } from 'react';
import ComponentStyle from './style';
import useDeepCompareEffect from 'use-deep-compare-effect'
import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Button from 'Base/Button/component'
import Table from 'Base/Table/component'
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, rows, ...props }) => {
  const [contacts, setContacts] = useState(rows)
  useDeepCompareEffect( () => setContacts(rows), [rows])
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
        <Panel>
          <Header>Contact History</Header>
          <Table 
            empty={"There is no contact history for this user"}
            headers={[{
              "key":"Date",
              "value":"Date",
            },{
              "key":"Duration",
              "value":"Duration",
            },{
              "key":"Call Type",
              "value":"Call Type",
            },{
              "key":"Caller",
              "value":"Caller",
            },{
              "key":"Receiver",
              "value":"Receiver",
            }]}
            rows={contacts}
          />
        </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component