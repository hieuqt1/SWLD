import { useEffect, useRef, useState } from "react";
import { Box, Card, CardHeader, CardMedia, Chip } from "@mui/material";

export default function LionCard({ lion }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      onMouseOver={() => setIsHovered(true)} // Triggered when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Triggered when mouse leaves
      sx={{
        width: "100%",
        height: "100%",
        maxHeight: "auto",
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "1rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: isHovered
          ? "transform 0.1s ease-in-out" // animation length when hovered
          : "opacity 0.6s ease-out, transform 0.6s ease-out", // will be default animation length when not hovered
        "&:hover": {
          transform: "scale(1.05)", 
          transition: "transform 0.1s ease-in-out", 
        },
      }}
    >

      <CardMedia
        component="img"
        height="auto"
        image={lion.images[0]}
        sx={{
          maxWidth: "100%",
          aspectRatio: "1/1",
          borderRadius: "0.5rem",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <CardHeader title={lion.name} sx={{ color: "primary.main", paddingLeft: 0 }} />
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Chip label="General" size="small" sx={{color: 'primary.main'}} />
        {lion.type.includes('LED') && <Chip
          label="LED"
          size="small"
          sx={{
            color: "primary.main",
            position: "relative",
            backgroundClip: "padding-box",
            border: "solid 2px transparent",
            background:
              "linear-gradient(white, white) padding-box, conic-gradient( #488cfb, #29dbbc, #ddf505, #ff9f0e, #e440bb, #655adc, #488cfb) border-box",
          }}
        />}
        {lion.type.includes("wedding") && (
          <Chip
            label="Wedding"
            size="small"
            sx={{
              backgroundColor: "secondary.light",
              color: "secondary.main",
            }}
          />
        )}
        {lion.type.includes("grand opening") && (
          <Chip
            label="Grand Opening"
            size="small"
            sx={{ backgroundColor: "gold.light", color: "gold.main" }}
          />
        )}
      </Box>
    </Card>
  );
}
