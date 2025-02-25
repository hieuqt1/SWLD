import { createTheme } from "@mui/material/styles";

const styleTheme = createTheme({
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
});

const theme = createTheme(styleTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: '0.5rem'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: styleTheme.palette.primary.contrastText, // Set the color to white
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          textAlign: "left",
          backgroundColor: styleTheme.palette.primary.light, // Use the primary.light palette variable
          color: '#454545',
          "&.MuiOutlinedInput-root": {
            borderRadius: '8px',
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                transition: "ease-in-out 0.1s",
              },
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: '#00000080',
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
