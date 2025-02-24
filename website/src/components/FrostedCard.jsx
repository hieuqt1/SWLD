import { Box } from "@mui/material";

export default function FrostedCard({ children, collapsedView }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: collapsedView ? "40%" : "100%",
        maxHeight : collapsedView ? "80vh" : "40vh",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        color: "primary.light",
        padding: "2rem",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none", /* IE and Edge */
        "scrollbar-width": "none", /* Firefox */
      }}
    >
      {children}
    </Box>
  );
}
