import { Box, Button, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageCarousel from "../components/ImageCarousel";
import theme from "../theme";

export default function HomePage() {
  const collapsedView = useMediaQuery("(min-width:600px)");
  const images = [
    {
      src: "src/assets/lion-lineup-1.JPG",
      alt: "lion lineup 1",
    },
    {
      src: "src/assets/lion-lineup-2.jpg",
      alt: "lion lineup 2",
    },
    {
      src: "src/assets/lion-lineup-3.JPG",
      alt: "lion lineup 3",
    },
    {
      src: "src/assets/lion-lineup-4.JPG",
      alt: "lion lineup 4",
    },
    {
      src: "src/assets/lion-lineup-5.JPG",
      alt: "lion lineup 5",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="src/assets/logos/team-banner.jpg"
          alt="hero"
          sx={{
            width: "100%",
            objectFit: "contain",
          }}
        />
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
              width: 500,
              height: 500,
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <ImageCarousel images={images} />
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
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
