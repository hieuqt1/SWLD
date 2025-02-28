import {
  Box,
  Button,
  Typography,
} from "@mui/material";

export default function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        gap: 5,
        textAlign: "center",
        alignItems: "center",
        backgroundImage: "url('src/assets/woah.jpeg')",
        backgroundColor: "rgba(255,255,255,0.3)",
        backgroundBlendMode: "lighten",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <Typography
          fontSize={75}
          fontWeight={550}
        >
          Page Not Found
        </Typography>
        <Typography
          fontSize={40}
          fontWeight={510}
        >
          We can't seem to find the page you're looking for.
        </Typography>
      </Box>

      <Button
        variant="contained"
        href={"/"}
        sx={{
          width: 300,
          height: 60,
          borderRadius: 3,
          backgroundColor: "#E50000",
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={500}
        >
          Back To Home
        </Typography>
      </Button>
    </Box>
  );
}
