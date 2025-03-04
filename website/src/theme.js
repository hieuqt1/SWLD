import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Public Sans", "serif"].join(","),
    fontFamilyHeader: ["Quicksand", "sans-serif"].join(","),
    fontSize: 16,
  },
  palette: {
    primary: {
      dark: '#000000',
      main: "#1D1D1F", // black
      light: "#FFFFFFDE",
      contrastText: "#FFFFFF",
    },
    secondary: {
      dark: "#B20000",
      main: "#E50000", // red
      light: "#FFBFBF"
    },
    gold: {
      dark: '#B28500',
      main: '#E5AC00', // gold
      light: '#FFEFBF'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
