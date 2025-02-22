import { AppBar, Box, Button, Typography, Toolbar } from "@mui/material";

export default function Header() {
  const pages = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            fontFamily="fontFamilyHeader"
            sx={{ flexGrow: 1 }}
          >
            Gió Nam Múa Lân
          </Typography>
          {pages.map((page) => (
            <Button
              color="primary.contrastText"
              disableRipple
              key={page.title}
              href={page.href}
              sx={{
                "&:hover": {
                  color: "secondary.main",
                },
                "&:active": {
                  color: "secondary.main",
                },
              }}
            >
              {page.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
