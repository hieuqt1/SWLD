import { ThemeProvider } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import LionCard from "../components/LionCard";

export default function OurPridePage() {
  const collapsedView = useMediaQuery("(min-width:480px)");

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          paddingY: "2rem",
          backgroundColor: "#f6f6f6",
          gap: "2rem",
        }}
      >
        <Box
          alt="hero"
          sx={{
            display: "block",
            position: "relative",
            width: "90%",
            maxHeight: collapsedView ? "40vh" : "20vh",
            aspectRatio: "2.35/1",
            backgroundImage: "url(/src/assets/lion-lineup-6.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "1rem",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
            }}
          >
            <Typography
              variant="h1"
              fontFamily="fontFamilyHeader"
              fontWeight="500"
            >
              Our Pride
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            paddingY: "2rem",
            paddingX: collapsedView ? "8rem" : "2rem",
            gap: "2rem",
          }}
        >
          <Typography sx={{color: "#0000008F"}}>
            Our lions are handmade by skilled craftsmen worldwide using bamboo,
            rattan, and papier-mâché. Feel free to request specific colors or
            styles, or contact us for expert recommendations.
          </Typography>
          <Grid2 container spacing={6} sx={{width: '100%'}}>
            <Grid2 size={{xs: 3}} >
              <LionCard />
            </Grid2>
            <Grid2 size={{xs: 3}} >
              <LionCard />
            </Grid2>
            <Grid2 size={{xs: 3}} >
              <LionCard />
            </Grid2>
            <Grid2 size={{xs: 3}} >
              <LionCard />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
