import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Typography
  } from "@mui/material";
  
  export default function AboutCard({ info }) {
    return (
      <Card
        sx={{
        //   width: "100%",
          maxWidth: 500,
          height: "100%",
          maxHeight: "auto",
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "1rem",
          transition: 'transform 0.1s ease-in-out',
          "&:hover": {
              transform: 'scale(1.05) '
          }
        }}
      >
        <CardMedia
        component="img"
        height="auto"
        image={"src/assets/lion-lineup-5.JPG"}
        sx={{
            maxWidth: "100%",
            aspectRatio: "1/1",
            borderRadius: "0.5rem",
            objectFit: "cover",
            objectPosition: "center",
        }}
        />
        <CardHeader title={info.value}
          sx={{
            color: "primary.main",
            paddingBottom: 1
          }} />
        <Typography>{info.text}</Typography>
      </Card>
    );
  }
  