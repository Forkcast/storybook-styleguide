import React from 'react';
import Avatar from './component';

export default {
  title: 'Composite Components/Avatar',
  component: Avatar,
  argTypes: {},
};

const Template = (args) => 
  <Avatar 
    classes={args.classes} 
    name={args.name}
    onClick={args.onClick}
  />

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  name: 'Alexa',
  onClick: undefined,
}
APrimary.storyName = '01. Default'
