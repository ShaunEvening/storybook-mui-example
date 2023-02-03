import { themes } from "../src/themes";
import { withThemeFromJSXProvider } from "storybook-addon-style-toolbox";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Load Roboto fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theming: {},
};

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
