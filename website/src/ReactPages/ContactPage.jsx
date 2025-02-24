import { Box, Button, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import FrostedCard from "../components/FrostedCard";

export default function ContactPage() {
  const collapsedView = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <Box
          sx={{
            width: "100%",
            // height: "100vh",
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          }}
        />
        <Box
          component="img"
          src="src/assets/confetti.jpg"
          alt="hero"
          sx={{
            display: "block",
            width: "100%",
            objectFit: "contain",
          }}
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
              Celebrate with us!
            </h1>
            <p>
              To schedule a performance, join our team, or inquire about
              anything else, contact us via this form, email us at booking@gionam.org, or reach out to one of our
              coordinators below.
            </p>
            <p>
              For performance requests, please contact us at least two weeks in
              advance. For Lunar New Year events, we recommend booking at least
              three weeks ahead.
            </p>
            <p>We look forward to hearing from you!</p>
          </FrostedCard>

          {/* <FrostedCard collapsedView={collapsedView}>
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
          </FrostedCard> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
