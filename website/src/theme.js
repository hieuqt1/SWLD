import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Public Sans", "serif"].join(","),
    fontFamilyHeader: ["Quicksand", "sans-serif"].join(","),
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#000000",
      light: "#FFFFFFDE",
      contrastText: "#FFFFFF",
    },
    secondary: {
      dark: "#B20000",
      main: "#E50000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Set the color to white
        },
      },
    },
  },
});

export default theme;
