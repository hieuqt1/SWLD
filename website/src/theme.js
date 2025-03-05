import { createTheme } from "@mui/material/styles";

const styleTheme = createTheme({
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
                borderColor: '#00000080',
              },
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: '#00000080',
              },
            },
            "&.Mui-error": {
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: styleTheme.palette.error.main,
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: '2px',
              },
            }
          },
        },
      },
    },
  },
});

export default theme;
