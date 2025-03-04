import {
  Avatar,
  Box,
  Button,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea
} from "@mui/material";
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
          overflow: "hidden"
        }}
      >
        {/* WIND GUSH ON CLICK */}
        <Box
          component="div"
          sx={{
            backgroundImage: "url('src/assets/temp.jpeg')",
            height: "70vh",
            width: "100%",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              height: 350,
              width: 350,
              // backgroundColor: "secondary.main",
              backgroundColor: "rgba(255,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "4px solid rgba(0,0,0,.6)",
              padding: 10
            }}
          >
            <Typography
              fontSize={38}
              fontWeight={600}
              sx={{
                color: "black",
                fontStyle: "italic"
              }}
            >
              Let the Southern Wind Guide You
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            backgroundColor: "#f6f6f6",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            margin: 0,
            padding: 0
          }}
        >
          <Box
            sx={{
              paddingTop: 2,
              paddingBottom: 5,
              paddingRight: collapsedView ? 20 : 10,
              paddingLeft: collapsedView ? 20 : 10,
            }}
          >

            <Box>
              <h1>Mission</h1>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae nam delectus praesentium facere? Minus accusamus delectus obcaecati eos, assumenda soluta alias, quas unde id numquam saepe facere et sequi?
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "indianred",
                padding: 10,
                paddingTop: 2,
                marginTop: 5,
                textAlign: "center"
              }}
            >
              <h1>About</h1>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: collapsedView ? "row" : "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: 5
                }}
              >
                <Card sx={{maxWidth: 400}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image="src/assets/lion-lineup-5.JPG"
                    />
                    <CardContent>
                      <Typography fontSize={25} fontWeight={600}>
                        TRADITION
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis reiciendis, perspiciatis voluptas hic saepe provident, quis sit sequi corporis sunt earum. Sit quos cum nulla officiis. Quae, repudiandae dolore!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 400}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image="src/assets/lion-lineup-5.JPG"
                    />
                    <CardContent>
                      <Typography fontSize={25} fontWeight={600}>
                        COMMUNITY
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis reiciendis, perspiciatis voluptas hic saepe provident, quis sit sequi corporis sunt earum. Sit quos cum nulla officiis. Quae, repudiandae dolore!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 400}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image="src/assets/lion-lineup-5.JPG"
                    />
                    <CardContent>
                      <Typography fontSize={25} fontWeight={600}>
                        DISCIPLINE
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis reiciendis, perspiciatis voluptas hic saepe provident, quis sit sequi corporis sunt earum. Sit quos cum nulla officiis. Quae, repudiandae dolore!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Box>

            <Box>
              <h1>History</h1>
              {/* OLD TEAM PHOTO */}
              <Box
                component="div"
                sx={{
                  backgroundImage: "url('src/assets/lion-lineup-3.JPG')",
                  height: "70vh",
                  width: "100%",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  marginBottom: 4
                }}
              />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero necessitatibus, optio autem eligendi quas iure, laudantium assumenda recusandae, molestias exercitationem quos? Aperiam est accusamus at dolore ullam vero, maiores enim minima! Officia nihil amet dolorem voluptatem, incidunt, maxime vel voluptates blanditiis quae odio magnam qui impedit mollitia. Officiis, nisi?
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero necessitatibus, optio autem eligendi quas iure, laudantium assumenda recusandae, molestias exercitationem quos? Aperiam est accusamus at dolore ullam vero, maiores enim minima! Officia nihil amet dolorem voluptatem, incidunt, maxime vel voluptates blanditiis quae odio magnam qui impedit mollitia. Officiis, nisi?
              </Typography>
            </Box>

            <Box>
              <h1>Our Coordinators</h1>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: collapsedView ? "row" : "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingRight: 10,
                  paddingLeft: 10,
                  gap: 5
                }}
              >
                {coordinators.map(coord => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "space-around"
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
      </Box>
    </ThemeProvider>
  )
}
