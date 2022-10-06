import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { themes } from '../src/themes';

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals;

    // only recompute the theme if the themeKey changes
    const theme = useMemo(() => themes[themeKey] || themes['light'], [themeKey])
  
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story/>
    </ThemeProvider>
    );
  };
