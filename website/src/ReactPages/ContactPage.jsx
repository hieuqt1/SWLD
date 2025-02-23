import { Box, Button, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import sample from "../assets/sample.mp4";
import FrostedCard from "../components/FrostedCard";

export default function ContactPage() {
  const collapsedView = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          }}
        />
        <video
          src={sample}
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: collapsedView ? "row" : "column",
            padding: "2rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <FrostedCard collapsedView={collapsedView}>
            <h1
              style={{ margin: "0px", textAlign: "center", color: "#e50000" }}
            >
              Let's celebrate together!
            </h1>
            <p>
              If you would like to schedule a performance, want to join our
              team, or have any other questions, you can contact us here, send
              us an email, or give one of our three coordinators a call (below)
              and we will do our best to respond to you promptly.
            </p>
            <p>
              For performance requests, please contact us at least 2 weeks in
              advance.
            </p>
            <p>
              If you are booking an event for Lunar New Year, we advise getting
              in touch with us sooner, at least 3 weeks in advance.
            </p>
            <p>We look forward to hearing from you!</p>
          </FrostedCard>

          <FrostedCard collapsedView={collapsedView}>
            <h1 style={{ margin: "0px" }}>Welcome</h1>
            <p>
              We are a nonprofit organization located in Orange County, CA,
              specializing in the traditional art of lion dance. Founded in
              2004, we have proudly continued to spread awareness of lion dance
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
          </FrostedCard>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
