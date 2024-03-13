import Box from "@mui/material/Box";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import images from "../../constants/images";
import "./index.scss";

const Programs = () => {
  return (
    <Fragment>
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Saira Semi Condensed"',
          color: "#9d4f4b",
          px: "7%",
          textAlign: { xs: "center", sm: "center", md: "center", lg: "start" },
          my: 3,
        }}
      >
        Our Programs
      </Typography>
      <Box
        component="div"
        sx={{
          width: { lg: "105vw" },
          height: { md: "90vh", lg: "100vh" },
          display: "flex",
          alignItems: { xs: "center", sm: "center", md: "start", lg: "start" },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          px: {xs : "5%",sm : "5%",md :0},
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="div"
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "33.6%" },
            height: "75%",
            clipPath: {
              md: "none",
              lg: "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, 0 100%)",
            },
            WebkitClipPath: {
              mf: "none",
              lg: "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, 0 100%)",
            },
            marginRight: { md: 0, lg: "-4.2vh" },
            padding: { md: "0", lg: "0px 11vh 0px 5px" },
            textAlign: "center",
            position: "relative",
            transition: "transform .3s",
            
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              img: {
                width: { xs: "100%", sm: "100%", md: "100%", lg: "39.5vw" },
                height: { md: "100%", lg: "100%" },
                objectFit: "cover",
                objectPosition: "center",
                position: "relative",
                filter: "brightness(50%)",
                right: { md: 0, lg: "10%" },
                transition: "transform 7s ease-in-out",
              },
              h2: {
                color: "#fff",
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: '"Saira Semi Condensed"',
              },
              div : {
                visibility: "hidden",
              },
              ":hover": {
                img: {
                  transform: { lg: "scale(1.25)" },
                  filter: "brightness(20%)",
                },
                h2: {
                  visibility: "hidden",
                },
                div : {
                  visibility: "visible",
                }
              },
            }}
          >
            <Box component="img" alt="Logo" src={images.beginner} />
            <Typography variant="h2">Beginner</Typography>
            <Box
            component="div"
            sx={{
              h3: {
                color: "#fff",
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: '"Saira Semi Condensed"',
              }
            }}>
              <Typography variant="h3">Hello World</Typography>
            </Box>
          </Box>
          

        </Box>

        <Box
          component="div"
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "35%" },
            height: "75%",
            position: "relative",
            clipPath: {
              md: "none",
              lg: "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, calc(0% + 10vh) 100%)",
            },
            WebkitClipPath: {
              md: "none",
              lg: "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, calc(0% + 10vh) 100%)",
            },
            marginLeft: { md: 1, lg: "-4.2vh" },
            marginRight: { md: 1, lg: "-4.2vh" },
            padding: { md: 0, lg: "1px 5px 1px 11vh" },
            textAlign: "center",
            transition: "transform .5s",
            ":hover": {
              transform: "scale(1.05)",

            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              img: {
                width: { xs: "100%", sm: "100%", md: "95%", lg: "40vw" },
                height: { md: "100%", lg: "101%" },
                objectFit: "cover",
                objectPosition: "center",
                position: "relative",
                filter: "brightness(50%)",
                right: { md: 0, lg: "20%" },
                transition: "transform 7s ease-in-out",
              },
              h2: {
                color: "#fff",
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: '"Saira Semi Condensed"',
              },
              ":hover": {
                img: {
                  transform: { lg: "scale(1.25)" },
                  filter: "brightness(20%)",
                },
                h2: {
                  visibility: "hidden",
                },
              },
            }}
          >
            <Box component="img" alt="Logo" src={images.elite} />
            <Typography variant="h2">Elite</Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "33.6%" },
            height: "75%",
            position: "relative",
            clipPath: {
              md: "none",
              lg: "polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)",
            },
            WebkitClipPath: {
              md: "none",
              lg: "polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)",
            },
            marginLeft: { md: 0, lg: "-4.2vh" },
            padding: { md: 0, lg: "1px 5px 1px 11vh" },
            textAlign: "center",
            transition: "transform .5s",
            ":hover": {
  

              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              img: {
                width: { xs: "100%", sm: "100%", md: "100%", lg: "40vw" },
                height: { md: "100%", lg: "101%" },
                objectFit: "cover",
                objectPosition: "center",
                position: "relative",
                filter: "brightness(50%)",
                right: { md: 0, lg: "30%" },
                transition: "transform 7s ease-in-out",
              },
              h2: {
                color: "#fff",
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: '"Saira Semi Condensed"',
              },
              ":hover": {
                img: {
                  transform: { lg: "scale(1.25)" },
                  filter: "brightness(20%)",
                },
                h2: {
                  visibility: "hidden",
                },
              },
            }}
          >
            <Box component="img" alt="Logo" src={images.international} />
            <Typography variant="h2">International</Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Programs;
