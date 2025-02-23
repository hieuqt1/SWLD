import { Box, Button, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";

export default function ContactPage() {
  const collapsedView = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: collapsedView ? "row" : "column",
          padding: "2rem",
          backgroundColor: "#f6f6f6",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            width: collapsedView ? "30%" : "100%",
          }}
        >
          <h1 style={{ margin: "0px", textAlign: "center", color: '#e50000' }}>
            Let's celebrate together!
          </h1>
          <p>
            If you would like to schedule a performance, want to join our team,
            or have any other questions, you can contact us here, send us an
            email, or give one of our three coordinators a call (below) and we
            will do our best to respond to you promptly.
          </p>
          <p>
            For performance requests, please contact us at least 2 weeks in
            advance.
          </p>
          <p>
            If you are booking an event for Lunar New Year, we advise getting in
            touch with us sooner, at least 3 weeks in advance.
          </p>
          <p>We look forward to hearing from you!</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: collapsedView ? "40%" : "100%",
          }}
        >
          <h1 style={{ margin: "0px" }}>Welcome</h1>
          <p>
            We are a nonprofit organization located in Orange County, CA,
            specializing in the traditional art of lion dance. Founded in 2004,
            we have proudly continued to spread awareness of lion dance
            traditions ever since.
          </p>
          <p>
            We are inaugural members of the USA Dragon and Lion Dance Sports
            Association.
          </p>
          <Button
            variant="contained"
            href="/contact"
            disableRipple
            disableElevation
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "#B20000",
              },
              transition: "ease-in-out 0.2s",
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
