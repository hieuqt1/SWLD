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
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E50000",
      contrastText: "#E57373",
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
  }
});

export default theme;
