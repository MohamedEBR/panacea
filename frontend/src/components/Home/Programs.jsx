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
          mb: 3,
        }}
      >
        Our Programs
      </Typography>
      <Box
        component="div"
        sx={{
          width: "105vw",
          height: "90vh",
          display: "flex",
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "33.6%",
            clipPath: "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, 0 100%)",
            WebkitClipPath:
              "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, 0 100%)",
            marginRight: "-4.2vh",
            padding: "5px 11vh 5px 5px",
            textAlign: "center",
            backgroundColor: "#000104",
            transition: "transform .5s",
            ":hover": {
              transform: "scale(1.05)",
              backgroundColor: "#100140",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: "40vw",
              height: "101%",
              borderRadius: "10%",
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
              filter: "brightness(50%)",
              right: "10%",
              transition: "transform 1s",
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
            width: "35%",
            clipPath:
              "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, calc(0% + 10vh) 100%)",
            WebkitClipPath:
              "polygon(0 0, calc(100% - 10vh) 0, 100% 100%, calc(0% + 10vh) 100%)",
            marginLeft: "-4.2vh",
            marginRight: "-4.2vh",
            padding: "1px 5px 1px 11vh",
            textAlign: "center",

            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: "40vw",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
              filter: "brightness(50%)",
              right: "20%",
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
            width: "33.6%",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)",
            WebkitClipPath:
              "polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)",
            marginLeft: "-4.2vh",
            padding: "1px 5px 1px 11vh",
            textAlign: "center",
            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            component="img"
            sx={{
              width: "40vw",
              height: "101%",
              borderRadius: "10%",
              objectFit: "cover",
              objectPosition: "center",
              position: "relative",
              filter: "brightness(50%)",
              right: "30%",
              boxShadow: "0 0 15px 10px #141414",
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
