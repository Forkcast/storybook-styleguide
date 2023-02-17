import React from 'react';
import Button from './component';

export default {
  title: 'Base Components/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => 
  <Button 
    classes={args.classes} 
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.children}
  </Button>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  disabled: false,
  children: 'Primary',
  onClick: undefined,
}
APrimary.storyName = '01. Primary'

export const BSecondary = Template.bind({})
BSecondary.args = {
  classes: ['secondary'],
  disabled: false,
  children: 'Secondary',
  onClick: undefined,
}
BSecondary.storyName = '02. Secondary'

export const CTertiary = Template.bind({})
CTertiary.args = {
  classes: ['tertiary'],
  disabled: false,
  children: 'Tertiary',
  onClick: undefined,
}
CTertiary.storyName = '03. Tertiary'

export const Disabled = Template.bind({})
Disabled.args = {
  classes: [],
  disabled: true,
  children: 'Disabled',
  onClick: undefined,
}
Disabled.storyName = '04. Disabled' 


export const EOnClick = Template.bind({})
EOnClick.args = {
  classes: [],
  disabled: false,
  children: 'On Click',
  onClick: (e) => alert('I have been clicked.')
}
EOnClick.storyName = '05. On Click' 