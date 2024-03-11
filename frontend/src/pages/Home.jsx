import Box from "@mui/material/Box";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import images from "../constants/images";
import Button from "@mui/material/Button";
import SportsMartialArtsSharpIcon from "@mui/icons-material/SportsMartialArtsSharp";
import { About, Programs, Contact } from "../components/Home";

const Home = () => {
  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "669px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: { sm: "100%", md: "400px", lg: "500px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              transform: { sm: "none", md: "skew(-20deg)" },
              width: { md: "355px", lg: "455px" },
              height: "100%",
              ml: { xs: 8, sm: 8, md: 35 },
            }}
          >
            <Box
              sx={{
                position: { md: "absolute" },
                transform: { sm: "none", md: "skew(20deg)" },
                textAlign: "start",
                // backgroundColor: "white",
                width: { sm: "100%", md: "600px" },
                left: { md: "-240px", lg: "-175px" },
                top: { md: "20%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Saira Semi Condensed"',
                  fontWeight: 700,
                  pt: 5,
                }}
              >
                Build Inner Strength and Confidence
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Saira Semi Condensed"',
                  pt: 2,
                  width: "80%",
                }}
              >
                Learn self-defense and gain confidence, all within a welcoming
                and supportive environment.
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={<SportsMartialArtsSharpIcon />}
                sx={{
                  mt: 3,
                  width: { sm: "200px", md: "250px" },
                  height: { xs: "50px", sm: "60px", md: "75px" },
                  borderRadius: 0,
                  backgroundColor: "#9d4f4b",
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "#9d4f4b",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Saira Semi Condensed"',
                    fontWeight: 500,
                  }}
                >
                  Get Started
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "0px", sm: "0px", md: "60%" },
            zIndex: -2,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Box
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              sx={{
                height: "669px",
                zIndex: -2,
                objectFit: "cover",
                objectPosition: "50% 100%",
              }}
              alt="Logo"
              src={images.banner}
            />
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          py: "10%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <About />
        <Programs />
        <Contact />
      </Box>
    </Fragment>
  );
};

export default Home;
