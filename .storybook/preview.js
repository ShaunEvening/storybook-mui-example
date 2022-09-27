import { withMuiTheme } from './with-mui-theme.decorator';

// Preload Roboto fonts
import(/* webpackPreload: true */ '@fontsource/roboto/300.css');
import(/* webpackPreload: true */ '@fontsource/roboto/400.css');
import(/* webpackPreload: true */ '@fontsource/roboto/500.css');
import(/* webpackPreload: true */ '@fontsource/roboto/700.css');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
};

export const decorators = [
  withMuiTheme,
]