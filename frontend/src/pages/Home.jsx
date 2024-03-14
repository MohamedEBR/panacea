import Box from "@mui/material/Box";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import images from "../constants/images";
import Button from "@mui/material/Button";
import SportsMartialArtsSharpIcon from "@mui/icons-material/SportsMartialArtsSharp";
import {
  About,
  Programs,
  Instructors,
  Contact,
  Pricing,
} from "../components/Home";
import { CustomBox } from "../components/shared/CustomBox";

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
          height: { xs: "100%", sm: "100%", md: "90vh", lg: "669px" },
          overflow: "hidden",
          mb: 10,
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
                  pt: { xs: 10, sm: 5, md: 5, lg: 5 },
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
                height: { xs: 0, sm: 0, md: "669px" },
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
          py: 5,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <About />
        <Programs />
        <CustomBox
          sx={{
            p: "3% 7%",
            my: 10,
            boxShadow: 3,
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            },
          }}
        >
          <Box
            component="div"
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "65%" },
              mr: { lg: 8 },
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Saira Semi Condensed"',
                color: "#fff",
                my: 3,
              }}
            >
              Class Schedule
            </Typography>
            <Typography
              variant="h4"
              sx={{
                my: 3,
                width: "100%",
              }}
            >
              Kickstart your fitness journey in high gear! Sample a variety of
              martial arts this week and discover the perfect fit for your
              goals.
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                my: 3,
                width: { sm: "150px", md: "200px" },
                height: { xs: "40px", sm: "50px", md: "60px" },
                borderRadius: 0,
                backgroundColor: "#fff",
                color: "#9d4f4b",
                ":hover": {
                  backgroundColor: "#9d4f4b",
                  color: "#fff",
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
                Schedule
              </Typography>
            </Button>
          </Box>
          <Box
            component="img"
            sx={{
              width: { xs: "30%", sm: "30%", md: "20%", lg: "20%" },
              height: "auto",
              boxShadow: 5,
              borderRadius: "50%",
              mb: 2,
            }}
            alt="logo"
            src={images.logo_white}
          />
        </CustomBox>
        <Instructors />
        <Pricing />
        <Contact />
      </Box>
    </Fragment>
  );
};

export default Home;
