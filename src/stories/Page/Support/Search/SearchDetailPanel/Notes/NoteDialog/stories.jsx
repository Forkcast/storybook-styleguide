import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchDetailPanel/Notes/NoteDialog',
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
  title: 'Dialog',
  hidden: false,
  onSave: (e, text, noteType) => alert(`Text: ${text}, Type: ${noteType}`)
}
APrimary.storyName = '01. Add Note' 
