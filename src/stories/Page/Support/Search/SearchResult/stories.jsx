import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchResult',
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
  rows: [
    {key: 'row1', columns:[{key: '90129', value:'90129'}, {key: 'John', value:'John'}, {key: 'Smith1', value:'Smith'}, {key: '1', value:'300-555-1234'}, {key: 'b1', value:'2/9/1995'}, {key: 'a1', value: 'View Details', class:'action'}]},
    {key: 'row2', columns:[{key: '68186', value:'68186'}, {key: 'Alexa', value:'Alexa'}, {key: 'Smith2', value:'Smith'}, {key: '2', value:'300-555-1234'}, {key: 'b2', value:'6/4/1992'}, {key: 'a2', value: 'View Details', class: 'action'}]}
  ]
}
APrimary.storyName = '1. With Records'

export const BSecondary = Template.bind({})
BSecondary.args = {
  classes: [],
  rows: []
}
BSecondary.storyName = '2. Empty'