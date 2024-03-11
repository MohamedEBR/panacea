import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import images from "../../constants/images";

import "./index.scss";
const About = () => {
  return (
    <Box
      component="div"
      sx={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        pb: "10%",
        px: "7%",
      }}
    >
      <Box
        component="div"
        sx={{
          textAlign: "start",
          flexDirection: "column",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
            color: "#9d4f4b",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
          }}
        >
          We're not just a karate school
          <br />
          We're a family dedicated to building
          <br />
          <span className="goldenText">Champions</span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
            pt: 2,
            fontSize: 20,
            width: "100%",
          }}
        >
          Welcome to Panacea Karate Academy, where we build champions for life!
          Our passionate black belt instructors, rooted in traditional Shotokan
          principles, provide more than just karate. We empower children to
          develop confidence, discipline, and goal-setting skills. In a
          supportive community, we celebrate every achievement, transforming
          students into well-rounded champions ready to meet any challenge.
        </Typography>
        <Button
          variant="contained"
          size="medium"
          sx={{
            mt: 3,
            width: { sm: "150px", md: "200px" },
            height: { xs: "40px", sm: "50px", md: "60px" },
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
            Learn more
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          width: "80%",
          pl: 5,
          pt: 5,
        }}
      >
        <Box
          component="img"
          sx={{
            width: "90%",
            height: "500px",
            objectFit: "none",
            objectPosition: "center",
            position: "relative",
            borderRadius: " 0% 0% 0% 0% / 0% 0% 0% 0%",
            boxShadow: "20px 20px rgba(0,0,0,.15)",
            transition: "all .4s ease",
            ":hover": {
              borderRadius: " 0% 0% 50% 50% / 0% 0% 5% 5%",
              boxShadow: "10px 10px rgba(0,0,0,.25)",
            },
          }}
          alt="Logo"
          src={images.karimNats2medals}
        />
      </Box>
    </Box>
  );
};

export default About;
