import React from 'react';
import InputField from 'InputField/component';
import editImage from './assets/edit.svg';

export default {
  title: 'Base Components/InputField',
  component: InputField,
  argTypes: {},
};

const Template = ({classes, type, children, ...args}) => 
  <InputField 
    classes={classes} 
    type={type}
    {...args}
  >
    {children}
  </InputField>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  children: 'Search by Phone Number, User ID, CIN or SSN',
  name: 'input1'
}
APrimary.storyName = '01. Border'

export const BSecondary = Template.bind({})
BSecondary.args = {
  classes: ['form-style'],
  children: 'Name',
  editImage: editImage,
  name: 'input2'
}
BSecondary.storyName = '02. Form Style'

export const CTertiary = Template.bind({})
CTertiary.args = {
  classes: ['form-style'],
  children: 'Name',
  editImage: editImage,
  name: 'input3',
  disabled: true
}
CTertiary.storyName = '03. Disabled Form Style'
