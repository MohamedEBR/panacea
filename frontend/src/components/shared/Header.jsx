import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import images from "../../constants/images";

const navItems = ["Home", "About", "Programs", "Contact"];
const drawerWidth = 300;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="div"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 120,
            marginTop: 2,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Logo"
          src={images.Logo}
        />
      </Box>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Panacea Karate Academy
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                ":hover": {
                  backgroundColor: "#9d4f4b",
                  color: "white",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            component="nav"
            position="static"
            color="transparent"
            sx={{
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <Box
                component="div"
                sx={{
                  flexGrow: 1,
                  ml: "7%",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 150,
                    paddingTop: 2,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="Logo"
                  src={images.Logo}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  p: 5,
                  mr: "7%",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      backgroundColor: "#9d4f4b",
                      color: "white",
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: {md :15, lg : 18},
                      borderRadius: 2,
                      width: {md :"100px", lg : "130px"},
                      mx: 1,
                      boxShadow: 1,
                      ":hover": {
                        backgroundColor: "#fff",
                        color: "#9d4f4b",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: "7%", display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              anchor={"right"}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { sm: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </HideOnScroll>
    </React.Fragment>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;