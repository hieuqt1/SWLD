import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";

export default function OurPridePage() {
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
        }}
      >
        <Box
          alt="hero"
          sx={{
            display: "block",
            position: "relative",
            width: "90%",
            height: "40vh",
            backgroundImage: "url(/src/assets/lion-lineup-6.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "1rem",
            paddingX: "8rem",
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
            <Typography variant="h1" fontFamily="fontFamilyHeader" fontWeight='500'>Our Pride</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
