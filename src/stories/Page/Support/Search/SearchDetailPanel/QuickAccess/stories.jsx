import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchDetailPanel/QuickAccess',
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
  loading: false,
  userId: '123456',
  firstName: 'John',
  lastName: 'Smith',
  eligibilities: ['Groceries', 'Housing Services'],
  dataFetch: (userId, component) => false,
  buttonClick: () => alert('Ive been clicked.'),
}
APrimary.storyName = '01. Data Fetched'