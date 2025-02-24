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
        // boxShadow: "0 25px 45px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        color: "primary.light",
        padding: "2rem",
        overflow: "scroll",
      }}
    >
      {children}
    </Box>
  );
}
