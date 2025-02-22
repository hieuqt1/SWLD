import {
  AppBar,
  Avatar,
  Box,
  Button,
  Typography,
  Toolbar,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  let activePath = window.location.pathname;
  const pages = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];
  const collapsedView = useMediaQuery("(min-width:600px)");
  const name = "Gió Nam Múa Lân";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            paddingX: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          {collapsedView ? (
            <>
              <Button
                startIcon={
                  <Avatar
                    src={"src/assets/team-logo.png"}
                    sx={{ width: 40, height: 40 }}
                  />
                }
                sx={{ color: "primary.contrastText" }}
                disableRipple
                href={"/"}
              >
                <Typography
                  fontFamily="fontFamilyHeader"
                  fontSize={20}
                  fontWeight={500}
                >
                  {name.toUpperCase()}
                </Typography>
              </Button>
              <ButtonGroup variant="text">
                {pages.map((page) => (
                  <Button
                    color="primary.contrastText"
                    disableRipple
                    key={page.title}
                    href={page.href}
                    sx={{
                      color:
                        activePath === page.href
                          ? "secondary.main"
                          : "primary.light",
                      "&:hover": {
                        color: "primary.contrastText",
                      },
                      transition: "ease-in-out 0.2s",
                    }}
                  >
                    {page.title.toUpperCase()}
                  </Button>
                ))}
              </ButtonGroup>
            </>
          ) : (
            <>
              <IconButton disableRipple>
                <Avatar
                  src={"src/assets/team-logo.png"}
                  sx={{ width: 40, height: 40 }}
                />
              </IconButton>
              <Typography
                fontFamily="fontFamilyHeader"
                fontSize={20}
                fontWeight={500}
              >
                {name.toUpperCase()}
              </Typography>
              <MenuIcon />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
