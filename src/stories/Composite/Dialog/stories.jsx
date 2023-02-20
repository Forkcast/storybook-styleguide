import React from 'react';
import Component from './component';

export default {
  title: 'Composite/Dialog',
  component: Component,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#F5F5F5' },
      ],
    },
  }
};

const Template = ({
  classes, 
  title, 
  hidden,
  children
}) => 
  <Component 
    classes={classes} 
    title={title}
    hidden={hidden}
  >
    {children}
  </Component>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  title: 'Dialog',
  children: <p>This is an example dialog</p>
}
APrimary.storyName = '01. With content'


export const BPrimary = Template.bind({})
BPrimary.args = {
  classes: [],
  title: 'Dialog',
  hidden: true,
  children: <p>This is an example dialog</p>
}
BPrimary.storyName = '02. Hidden'

