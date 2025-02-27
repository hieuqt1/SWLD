import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

// WANT IMAGE OF FALLEN DOWN LION

export default function Error() {
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
        backgroundImage: "url('src/assets/temp.jpeg')",
        backgroundColor: "rgba(255,255,255,.6)",
        backgroundBlendMode: "lighten",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <Typography
          // fontFamily="fontFamily"
          fontSize={70}
          fontWeight={550}
        >
          Page Not Found
        </Typography>
        <Typography
          // fontFamily="fontFamily"
          fontSize={35}
          fontWeight={500}
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
          // position: "absolute"
        }}
      >
        <Typography
          // fontFamily="fontFamilyHeader"
          fontSize={20}
          fontWeight={500}
        >
          Back To Home
        </Typography>
      </Button>
    </Box>
    // <div style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     width: '100%',
    //     height: '100vh',
    //     gap: 30,
    //     textAlign: "center",
    //     alignItems: "center",
    //     width: '100%',
    //     height: '100vh',
    //     backgroundImage: "url('src/assets/temp.jpeg')",
    //     backgroundColor: "rgba(255,255,255,.6)",
    //     backgroundBlendMode: "lighten",
    //     backgroundSize: "cover"
    // }}>

    //     <Container>
    //         <Typography
    //             // fontFamily="fontFamily"
    //             fontSize={70}
    //             fontWeight={550}
    //         >Page Not Found</Typography>
    //         <Typography
    //             // fontFamily="fontFamily"
    //             fontSize={35}
    //             fontWeight={500}
    //         >We can't seem to find the page you're looking for.</Typography>
    //     </Container>

    //     <Button variant="contained" href={"/"} sx={{
    //         width: 300,
    //         height: 60,
    //         borderRadius: 3,
    //         backgroundColor: "#E50000",
    //         // position: "absolute"
    //     }}>
    //         <Typography
    //             // fontFamily="fontFamilyHeader"
    //             fontSize={20}
    //             fontWeight={500}
    //         >Back To Home
    //         </Typography>
    //     </Button>

    // </div>
  );
}
