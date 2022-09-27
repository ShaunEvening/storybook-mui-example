import { createTheme } from "@mui/material";
import { cyan, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
  },
});
