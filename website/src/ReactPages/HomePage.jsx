import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HomePage() {
  const collapsedView = useMediaQuery("(min-width:600px)");

  return (
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
          component="img"
          src="src/assets/lion-lineup-1.JPG"
          alt="lion lineup"
          sx={{
            width: 500,
            height: 500,
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
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
          <h1 style={{"margin": "0px"}}>Welcome</h1>
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
              backgroundColor: "#E50000",
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
  );
}
