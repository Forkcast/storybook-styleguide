import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchDetailPanel/ContactHistory',
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

}
APrimary.storyName = '01.Empty'


export const BPrimary = Template.bind({})
BPrimary.args = {
  classes: [],
  rows: [{
    key: "contacts_row1",
    columns: [{
      key: "contacts_ro1col1",
      value: "12/15/2022"
    },{
      key: "contacts_ro1col2",
      value: "00:56"
    },{
      key: "contacts_ro1col3",
      value: "Support Call"
    },{
      key: "contacts_ro1col4",
      value: "Admin"
    },{
      key: "contacts_ro1col5",
      value: "Ryan Ally"
    }]
  },{
    key: "contacts_row2",
    columns: [{
      key: "contacts_ro2col1",
      value: "12/15/2022"
    },{
      key: "contacts_ro2col2",
      value: "05:56"
    },{
      key: "contacts_ro2col3",
      value: "RD Assessment"
    },{
      key: "contacts_ro2col4",
      value: "Admin"
    },{
      key: "contacts_ro2col5",
      value: "Nick Joe"
    }]
  }]
}
BPrimary.storyName = '02. With History'