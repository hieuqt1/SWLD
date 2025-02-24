import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function ImageCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      handleNextImage();
    }, 5000);
  }, [imageIndex]);

  const handleNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((image) => {
          return (
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                flexShrink: 0,
                flexGrow: 0,
                transform: `translateX(${-100 * imageIndex}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "0.5rem",
        }}
      >
        {images.map((_, index) => {
          return (
            <IconButton
              key={index}
              disableRipple
              onClick={() => setImageIndex(index)}
              sx={{
                margin: "0.25rem",
                padding: 0,
              }}
            >
              <CircleIcon
                sx={{
                  color: imageIndex === index ? "primary.light" : "#ffffff40",
                  fontSize: '1rem'
                }}
              ></CircleIcon>
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
}
