import React from 'react';
import Component from './component';

export default {
  title: 'Base Components/SelectField',
  component: Component,
  argTypes: {},
};

const Template = ({classes, children, ...args}) => 
  <Component
    classes={classes} 
    {...args}
  >
    {children}
  </Component>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  children: 'Note Type',
  name: 'select1',
  options: [{
    'name': 'Type 1',
    'value': 'type1'
  },{
    'name': 'Type 2',
    'value': 'type2'
  }]
}
APrimary.storyName = '01. Border'
