import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchDetailPanel',
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
  detailActions: {
    actions: {
      dataFetch: (userId, component) => alert(`${component} mounted`),
      notes: () => false
    }
  },
}
APrimary.storyName = '1. With Details'