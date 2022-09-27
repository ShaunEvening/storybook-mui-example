import React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Variants = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="text">Text Button</Button>
    <Button variant="contained">Contained Button</Button>
    <Button variant="outlined">Outlined Button</Button>
  </Stack>
);

export const Colors = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained">Primary</Button>
    <Button variant="contained" color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="contained" color="error">
      Error
    </Button>
  </Stack>
);

export const Sizes = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
  </Stack>
);
