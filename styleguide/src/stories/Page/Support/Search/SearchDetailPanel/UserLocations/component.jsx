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
   primary,
   locations,
   ...props }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Panel>
        <Header>User Locations</Header>
        <InputField classes={['form-style']} name="primaryLocation" value={primary}>Primary Location <span>(Default)</span></InputField>
        {locations.map((location,index) => 
          <InputField classes={['form-style']} key={`location${index}`} name={`location${index}`} value={location}>Other Location</InputField>  
        )}
      </Panel>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component