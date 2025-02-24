import { Box, Button, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import FrostedCard from "../components/FrostedCard";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const collapsedView = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box
          component="img"
          src="src/assets/confetti.jpg"
          alt="hero"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
              anything else, contact us here, email us at booking@gionam.org, or reach out to one of our
              coordinators below.
            </p>
            <p>
              For performance requests, please contact us at least two weeks in
              advance. For Lunar New Year events, we recommend booking at least
              three weeks ahead.
            </p>
            <p>We look forward to hearing from you!</p>
          </FrostedCard>

          <FrostedCard collapsedView={collapsedView}>
            <ContactForm />
          </FrostedCard>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
