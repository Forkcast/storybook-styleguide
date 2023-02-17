import React from 'react';
import Paragraph from './component';

export default {
  title: 'Base Components/Paragraph',
  component: Paragraph,
  argTypes: {},
};

const Template = (args) => <Paragraph classes={args.classes}>{args.children}</Paragraph>;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  children: 'Primary'
}
APrimary.storyName = '01. Primary'

export const BHeavy1 = Template.bind({})
BHeavy1.args = {
  classes: ['heavy1'],
  children: 'Heavy 1'
}
BHeavy1.storyName = '02. Heavy1'

export const BHeavy2 = Template.bind({})
BHeavy2.args = {
  classes: ['heavy2'],
  children: 'Heavy 2'
}
BHeavy2.storyName = '03. Heavy2'

export const BHeavy3 = Template.bind({})
BHeavy3.args = {
  classes: ['heavy3'],
  children: 'Heavy 3'
}
BHeavy3.storyName = '04. Heavy3'

export const CBigger = Template.bind({})
CBigger.args = {
  classes: ['bigger'],
  children: 'Bigger'
}
CBigger.storyName = '05. Bigger'

export const CMedium = Template.bind({})
CMedium.args = {
  classes: ['medium'],
  children: 'Medium'
}
CMedium.storyName = '06. Medium'

export const DLarge = Template.bind({})
DLarge.args = {
  classes: ['large'],
  children: 'Large'
}
DLarge.storyName = '07. Large'

