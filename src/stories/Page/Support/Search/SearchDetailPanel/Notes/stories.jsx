import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchDetailPanel/Notes',
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

const Template = ({classes, ...args}) => <Component classes={classes} {...args} />

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  action: (text, type, date) => alert(`Text: ${text}, Type: ${type}, Date: ${date}`)
}
APrimary.storyName = '01. No Notes' 


export const BPrimary = Template.bind({})
BPrimary.args = {
  classes: [],
  rows: [{
    key: "row1",
    columns: [{
      key: "row1col1",
      value: "Lorem ipsum is simply dummy text of the printing and typesetting industry",
    },{
      key: "ro1col2",
      value: "Refund type",
    },{
      key: "row1col3",
      value: "Admin",
    },{
      key: "ro1cnol4",
      value: "1/13/2023",
    }]
  }],
  action: (text, type, date) => alert(`Text: ${text}, Type: ${type}, Date: ${date}`)
}
BPrimary.storyName = '02. One Note'