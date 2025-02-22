import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Public Sans", "serif"].join(","),
    fontFamilyHeader: ["Quicksand", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E50000",
    },
  },
});

export default theme;
