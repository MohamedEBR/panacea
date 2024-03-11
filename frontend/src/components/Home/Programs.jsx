import Box from "@mui/material/Box";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
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
          height: "100vh",
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
            backgroundColor: "red",
            textAlign: "center",
            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        ></Box>
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
            padding: "5px 5px 5px 11vh",
            backgroundColor: "#44325A",
            textAlign: "center",
            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        ></Box>
        <Box
          component="div"
          sx={{
            width: "33.6%",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)",
            WebkitClipPath:
              "polygon(0 0, 100% 0, 100% 100%, calc(0% + 10vh) 100%)",
            marginLeft: "-4.2vh",
            padding: "5px 5px 5px 11vh",
            backgroundColor: "yellow",
            textAlign: "center",
            transition: "transform .2s",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        ></Box>
      </Box>
    </Fragment>
  );
};

export default Programs;
