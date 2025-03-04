import {
  Avatar,
  Box,
  Button,
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid2
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import CommonPageLayout from "./CommonPageLayout";
import AboutCard from "../components/AboutCard";

export default function AboutPage() {
  const collapsedView = useMediaQuery("(min-width:1240px)");

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
    },
  ];

  const cardsInfo = [
    {
      value: "COMMUNITY",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis reiciendis, perspiciatis voluptas hic saepe provident, quis sit sequi corporis sunt earum. Sit quos cum nulla officiis. Quae, repudiandae dolore!"
    },
    {
      value: "TRADITION",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis reiciendis, perspiciatis voluptas hic saepe provident, quis sit sequi corporis sunt earum. Sit quos cum nulla officiis. Quae, repudiandae dolore!"
    },
    {
      value: "DISCIPLINE",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis reiciendis, perspiciatis voluptas hic saepe provident, quis sit sequi corporis sunt earum. Sit quos cum nulla officiis. Quae, repudiandae dolore!"
    },
  ]

  return (
    <CommonPageLayout
      title={"About"}
      image={"/src/assets/lion-lineup-6.png"}
    >
        {/* WIND GUSH ON CLICK */}
      <Box>
        <h1 style={{margin: 0}}>Mission</h1>
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            // padding: 5
          }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: 3,
            }}
          >
            <Typography
              fontSize={28}
              fontWeight={600}
              sx={{
                color: "black",
                fontStyle: "italic",          transition: 'transform 0.1s ease-in-out',
                "&:hover": {
                    transform: 'scale(1.05)',
                    color: "secondary.main",
                    cursor: "help"
                }
              }}
            >
              "Let the Southern Wind Guide You"
            </Typography>
            <Typography>-Founder</Typography>
          </Box>
        </Box>

        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae nam delectus praesentium facere? Minus accusamus delectus obcaecati eos, assumenda soluta alias, quas unde id numquam saepe facere et sequi?
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "secondary.light",
          padding: 8,
          paddingTop: 5,
          marginTop: 3,
          textAlign: "center",
          borderRadius: "1rem"
        }}
      >
        <h1 style={{ marginTop: "0px" }}>About</h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: collapsedView ? "row" : "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5
          }}
        >
          {cardsInfo.map(cardInfo => (
            <AboutCard info={cardInfo} />
          ))}  
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
            marginBottom: 4,
            borderRadius: "1rem"
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
        <h1 style={{ marginTop: "0px" }}>Our Coordinators</h1>
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
          {/* LINK TO CONTACT OR LINKEDIN */}
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
                // src={coord.src}
                sx={{
                  width: 300,
                  height: 300
                }}
              >{coord.alt}</Avatar>
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
    </CommonPageLayout>
  )
}
