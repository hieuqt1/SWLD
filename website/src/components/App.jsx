import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Header from "./Header";
import Footer from "./Footer";

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
