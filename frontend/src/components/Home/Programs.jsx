import Box from "@mui/material/Box";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import images from "../../constants/images";


const Programs = () => {
  return (
    <Fragment>
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Saira Semi Condensed"',
          color: "#9d4f4b",
          px: "7%",

          my: 3,
        }}
      >
        Our Programs
      </Typography>
      <Box
        component="div"
        sx={{
          width: {md: "100%", lg :"105vw"},
          height: "90vh",
          display: "flex",
          flexDirection: {md: "column", lg: "row"},
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="div"
          sx={{
            width: {md: "33%", lg :"33.6%"},
            clipPath: {md: "none", lg : "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, 0 100%)"},
            WebkitClipPath:
              {mf: "none", lg : "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, 0 100%)"},
            marginRight: {md : 0, lg :"-4.2vh"},
            padding: {md : "0", lg : "5px 11vh 5px 5px"},
            textAlign: "center",
            backgroundColor: {md : "transparent", lg :"#000104"},
            transition: "transform .5s",
            ":hover": {
              transform: "scale(1.05)",
              backgroundColor: {md : "transparent", lg :"#000140"},
            },
          }}
        >
          {/* <Typography
          sx={{
            color: "#fff",
          }}>
            Hello, How are you today
          </Typography> */}
          <Box
            component="img"
            sx={{
              width: {md : "100%",lg :"40vw"},
              height: {md: "100%", lg: "101%"},
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
              filter: "brightness(50%)",
              right: {md: 0, lg: "10%"},
              transition: "transform .5s",
              ":hover": {
                filter: "brightness(100%)",
              },
            }}
            alt="Logo"
            src={images.beginner}
          />
        </Box>

        <Box
          component="div"
          sx={{
            width: {md : "33%", lg: "35%"},
            clipPath:
              {md: "none", lg :"polygon(0 0, calc(100% - 10vh) 0, 100% 100%, calc(0% + 10vh) 100%)"},
            WebkitClipPath:
              {md: "none", lg :"polygon(0 0, calc(100% - 10vh) 0, 100% 100%, calc(0% + 10vh) 100%)"},
            marginLeft: {md: 0, lg: "-4.2vh"},
            marginRight: {md : 0,lg :"-4.2vh"},
            padding: {md : 0, lg :"1px 5px 1px 11vh"},
            textAlign: "center",

            transition: "transform .5s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: {md : "100%", lg :"40vw"},
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
              filter: "brightness(50%)",
              right: {md: 0, lg :"20%"},
              transition: "transform 1s",
              ":hover": {
                filter: "brightness(100%)",
              },
            }}
            alt="Logo"
            src={images.elite}
          />
        </Box>
        <Box
          component="div"
          sx={{
            width: {md : "33%", lg : "33.6%"},
            clipPath: {md: "none", lg :"polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)"},
            WebkitClipPath:
              {md:"none", lg :"polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)"},
            marginLeft: {md : 0, lg : "-4.2vh"},
            padding: {md : 0, lg: "1px 5px 1px 11vh"},
            textAlign: "center",
            transition: "transform .5s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: {md : "100%", lg :"40vw"},
              height: {md : "100%", lg : "101%"},
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
              filter: "brightness(50%)",
              right: {md :0, lg : "30%"},
              transition: "transform 1s",
              ":hover": {
                filter: "brightness(100%)",
              },
            }}
            alt="Logo"
            src={images.international}
          />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Programs;
