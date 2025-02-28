import { Avatar, Box, Button, ThemeProvider, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";

export default function AboutPage() {
  const collapsedView = useMediaQuery("(min-width:1080px)");
  const coordinators = [
    {
      src: "src/assets/woah.jpeg",
      alt: "Brandon Chau",
    },
    {
      src: "src/assets/woah.jpeg",
      alt: "Kaitlen Ngo",
    },
    {
      src: "src/assets/woah.jpeg",
      alt: "Alex Huynh",
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="src/assets/temp.jpeg"
          alt="hero"
          sx={{
            // height: "50vh",
            width: "100%",
            // objectFit: "cover",
            objectFit: "contain"
          }}
        />
        <Box
          component="div"
          sx={{
            height: "100px",
            width: "100%",
            backgroundColor: "secondary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography
            fontSize={30}
            fontWeight={300}
            sx={{
              color: "white",
              fontStyle: "italic"
            }}
          >
            Let the Southern Wind Guide You
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: collapsedView ? "row" : "column",
            padding: "2rem",
            backgroundColor: "#f6f6f6",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              
            }}
          >
            <h1>Mission</h1>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae nam delectus praesentium facere? Minus accusamus delectus obcaecati eos, assumenda soluta alias, quas unde id numquam saepe facere et sequi?
            </Typography>
            <h1>About</h1>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae nam delectus praesentium facere? Minus accusamus delectus obcaecati eos, assumenda soluta alias, quas unde id numquam saepe facere et sequi?
            </Typography>
            <h1>History</h1>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae nam delectus praesentium facere? Minus accusamus delectus obcaecati eos, assumenda soluta alias, quas unde id numquam saepe facere et sequi?
            </Typography>
            <h1>Our Coordinators</h1>
            <Box
              sx={{
                display: "flex",
                flexDirection: collapsedView ? "row" : "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5
              }}
            >
              {coordinators.map(coord => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <Avatar
                    alt={coord.alt}
                    src={coord.src}
                    sx={{
                      width: 300,
                      height: 300
                    }}
                  />
                  <Typography
                    fontSize={25}
                    fontWeight={500}
                  >
                    {coord.alt}
                  </Typography>
                </Box>

              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
