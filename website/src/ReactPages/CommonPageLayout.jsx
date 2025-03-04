import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";

export default function CommonPageLayout({ children, title, image }) {
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
            backgroundImage: `url(${image})`,
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
              {title}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingY: "2rem",
            paddingX: collapsedView ? "8rem" : "2rem",
            gap: "2rem",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
