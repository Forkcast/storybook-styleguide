import React from 'react';
import Component from './component';

export default {
  title: 'Pages/Support/Search/SearchDetailPanel/PersonalInformation',
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
  action: (
    phone,
    firstName,
    lastName,
    email,
    status,
    language,
    dateOfBirth,
    locations,
    zip,
    eligibilities
  ) => alert(`
    phone: ${phone}, 
    firstName: ${firstName}, 
    lastName: ${lastName}, 
    email: ${email},
    status: ${status},
    language: ${language},
    dateOfBirth: ${dateOfBirth},
    locations: ${locations},
    zip: ${zip},
    eligibilities: ${eligibilities}
    `
  )
}

APrimary.storyName = '01. With Save Action'