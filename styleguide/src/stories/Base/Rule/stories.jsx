import React from 'react';
import Rule from './component';

export default {
  title: 'Base Components/Rule',
  component: Rule,
  argTypes: {},
};

const Template = (args) => <Rule classes={args.classes} width={args.width} offset={args.offset} />;

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
}
APrimary.storyName = '01. Primary'

const Template2 = (args) => 
<div style={{'background-color': '#e2e2e2', 'width': '100%', 'padding': '50px'}}>
  <div style={{'padding':'25px', 'height': '100px', 'background-color': 'white', 'border-radius': '6px', 'width': '100px'}}>
  <Rule classes={args.classes} width={args.width} offset={args.offset} />
  </div>
</div>
export const BContainer = Template2.bind({})
BContainer.args = {
  classes: [],
}
BContainer.storyName = '02. Example with Container'
