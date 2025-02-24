import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Footer() {
  const logos = [
    {
      key: "Southern Wind Lion Dance",
      src: "src/assets/logos/team-logo.png",
      href: "/"
    },
    {
      key: "USA Dragon & Lion Dance Sports Association",
      src: "src/assets/logos/association_icon.png",
      href: 'https://www.liondanceusa.com/'
    },
    {
      key: "Meta",
      src: "src/assets/logos/meta.svg",
      href: 'https://www.facebook.com/southernwindliondance'
    },
    {
      key: "Instagram",
      src: "src/assets/logos/instagram.svg",
      href: 'https://www.instagram.com/gionamsouthernwind'
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            paddingY: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          disableGutters
        >
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            {logos.map((logo) => (
              <IconButton disableRipple href={logo.href}>
                <Box
                  component="img"
                  src={logo.src}
                  sx={{
                    width: 36,
                    height: 36,
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
              </IconButton>
            ))}
          </Box>

          <Typography
            fontFamily="fontFamilyHeader"
            fontSize={12}
            color="primary.contrastText"
          >
            Gió Nam Múa Lân | Southern Wind Lion Dance | 南風醒獅團
          </Typography>
          <Typography
            fontFamily="fontFamilyHeader"
            fontSize={12}
            color="primary.contrastText"
          >
            © 2025 All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
