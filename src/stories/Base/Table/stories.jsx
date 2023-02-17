import React from 'react';
import Table from './component';

export default {
  title: 'Base Components/Table',
  component: Table,
  argTypes: {},
};

const Template = ({classes, headers, rows, ...args}) => <Table classes={classes} headers={headers} rows={rows} {...args} />

export const APrimary = Template.bind({})
APrimary.args = {
  classes: [],
  headers: [{ key: 'test', value: 'test'}, { key: 'test2', value: 'test2'}],
  rows: [
    {key: 'row1', columns:[{key: 'test3', value:'test3'}, {key: 'test4', value:'test4'}]},
    {key: 'row2', columns:[{key: 'test5', value:'test5'}, {key: 'test6', value:'test6'}]}
  ],
  action: (e, value) => alert(value)
}
APrimary.storyName = '01. Primary'
