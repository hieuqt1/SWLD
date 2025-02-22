import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Footer() {
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
          <Typography
            fontFamily="fontFamilyHeader"
            fontSize={12}
            color="primary.contrastText"
          >
            Gió Nam Múa Lân | Southern Wind Lion Dance | 南風醒獅團 © 2025 All
            rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
