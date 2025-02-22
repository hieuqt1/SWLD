import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Header from "./Header";

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div style={{ padding: 20 }}>
        {children}

      </div>
    </ThemeProvider>
  );
}

export default App;
