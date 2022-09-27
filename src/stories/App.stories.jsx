import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import App from '../App';

export default {
  title: 'Example/App',
  component: App,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <App {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const app = Template.bind({});
