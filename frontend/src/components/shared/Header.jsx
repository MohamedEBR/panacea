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
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Programs","Blogs", "Contact", ];
const drawerWidth = 300;

const returnNavItem = (item) => {
  if (item == "Home") {
    return "";
  }
  return item;
};
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
      <Typography variant="h6" sx={{ 
        marginBottom: 2, 
        fontWeight: "bold",
        }}>
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
              <Link
                to={`/${returnNavItem(item).toLocaleLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText primary={item} />
              </Link>
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
          <AppBar component="nav" position="static" color="transparent">
            <Toolbar
              style={{ paddingLeft: 0 }}
              sx={{
                height: "75px",
                backgroundColor: { sm: "#fff", md: "#9d4f4b" },
              }}
            >
              <Box
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    transform: "skew(-20deg)",
                    backgroundColor: "#fff",
                    pl: {xs: "5%",sm : "7%",md :"12%", lg: "12%"},
                  }}
                >
                  {/* <Link to="/"> */}
                  <Box
                    component="img"
                    sx={{
                      height: 75,
                      paddingTop: 1,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      transform: "skew(20deg)",
                    }}
                    alt="Logo"
                    src={images.Logo}
                  />
                  {/* </Link> */}
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="h5"
                      noWrap
                      sx={{
                        mr: 2,
                        display: "flex",
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                        fontFamily: '"Saira Semi Condensed"',
                        pl: {xs :1, sm : 3, md: 3, lg: 3},
                        fontSize: {xs : '1.25rem'},
                        transform: "skew(20deg)",
                      }}
                    >
                      Panacea Karate Academy
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                  p: 0,
                  mr: "7%",
                  height: "75px",
                  backgroundColor: "#9d4f4b",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      backgroundColor: "#9d4f4b",
                      color: "#fff",
                      textTransform: "none",
                      fontSize: { md: 14, lg: 16 },
                      borderRadius: 0,
                      width: { md: "90px", lg: "130px" },
                      height: { md: "100%" },
                      transform: "skew(-20deg)",

                      ":hover": {
                        backgroundColor: "#fff",
                        color: "#9d4f4b",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        transform: "skew(20deg)",
                        fontFamily: '"Saira Semi Condensed"',
                      }}
                    >
                      <Link
                        to={`/${returnNavItem(item).toLocaleLowerCase()}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {item}
                      </Link>
                    </Typography>
                  </Button>
                ))}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr:{xs : "3%", sm :"7%"}, display: { md: "none" } }}
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
