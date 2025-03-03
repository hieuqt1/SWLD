import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
} from "@mui/material";

export default function LionCard() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "40vh",
        maxHeight: "50vh",
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "1rem",
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        image="\src\assets\lions\arcturus\arcturus-2.JPG"
        sx={{
          maxWidth: "100%",
          height: "70%",
          borderRadius: "0.5rem",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <CardHeader title="Arcturus" sx={{ color: "#1D1D1F" }} />
      <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
        <Chip label="General" size="small" />
        <Chip label="Wedding" size="small" />
        <Chip label="Grand Opening" size="small" />
      </Box>
    </Card>
  );
}
