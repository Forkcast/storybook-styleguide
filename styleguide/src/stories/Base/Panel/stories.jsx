import React from 'react';
import Panel from './component';
import Paragraph from 'Paragraph/component';
import Header from 'Header/component';

export default {
  title: 'Base Components/Panel',
  component: Panel,
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

const Template = (args) => <Panel classes={args.classes}>{args.children}</Panel>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  children: <><Header>Example</Header><Paragraph>This is an example</Paragraph></>
}
APrimary.storyName = '01. With Header and Paragraph'

