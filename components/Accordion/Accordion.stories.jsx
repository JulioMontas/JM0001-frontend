import React from 'react';

import { Accordion } from './index';

export default {
  title: 'Accordion',
  component: Accordion,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Accordion',
};
