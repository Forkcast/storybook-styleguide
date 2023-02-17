import React from 'react';
import Header from 'Header/component';

export default {
  title: 'Base Components/Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => 
  <Header 
    classes={args.classes} 
    level={args.level}
  >
    {args.children}
  </Header>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  children: 'Level 1 Header',
  level: 1
}
APrimary.storyName = '01. Level 1'

export const BSecondary = Template.bind({})
BSecondary.args = {
  classes: [],
  children: 'Level 2 Header',
  level: 2  
}
BSecondary.storyName = '02. Level 2'