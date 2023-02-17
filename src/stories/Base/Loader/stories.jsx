import React from 'react';
import Loader from './component';

export default {
  title: 'Base Components/Loader',
  component: Loader,
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

const Template = (args) => <Loader classes={args.classes} loading={args.loading} />

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  loading: true,
}
APrimary.storyName = '01. Basic Loader'

