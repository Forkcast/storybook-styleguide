import React from 'react';
import SideMenu from './component';

export default {
  title: 'Composite Components/Side Menu',
  component: SideMenu,
  argTypes: {},
};

const Template = (args) => 
  <SideMenu 
    classes={args.classes} 
    onClick={args.onClick}
  />

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  onClick: (e, path) => alert(`Simulate routing to ${path}`),
}
APrimary.storyName = '01. Default'
