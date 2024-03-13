import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import images from "../../constants/images";

const Instructors = () => {
  return (
    <Box
      component="div"
      sx={{
        flexDirection: "column",
        display: "flex",
        alignItems: "start",
        justifyContent: { xs: "center", sm: "center", md: "space-between" },
        height: "100%",
        textAlign: { xs: "center", sm: "center", md: "center", lg: "start" },
        pb: 5,
        mb: 5,
        px: "7%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Saira Semi Condensed"',
          color: "#9d4f4b",
          width: "200px",
          mb: 3,
        }}
      >
        Our Instructors
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          mb: 20,
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "50%" },
            height: "500px",
            objectFit: "none",
            objectPosition: "center",
            position: "relative",

            borderRadius: " 0% 0% 0% 0% / 0% 0% 0% 0%",
            boxShadow: "20px 20px rgba(0,0,0,.15)",
            mr: 5,
            transition: "all .4s ease",
            ":hover": {
              borderRadius: " 0% 0% 50% 50% / 0% 0% 5% 5%",
              boxShadow: "10px 10px rgba(0,0,0,.25)",
            },
          }}
          alt="Logo"
          src={images.karimNats2medals}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "40%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Saira Semi Condensed"',
              mb: 3,
            }}
          >
            Sensei Amr Ibraheem
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          mb: 20,
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "40%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Saira Semi Condensed"',
              mb: 3,
            }}
          >
            Sensei Karim Ebraheem
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "50%" },
            height: "500px",
            objectFit: "none",
            objectPosition: "center",
            position: "relative",
            borderRadius: " 0% 0% 0% 0% / 0% 0% 0% 0%",
            boxShadow: "20px 20px rgba(0,0,0,.15)",
            mr: 5,
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "50%" },
            height: "500px",
            objectFit: "none",
            objectPosition: "center",
            position: "relative",
            borderRadius: " 0% 0% 0% 0% / 0% 0% 0% 0%",
            boxShadow: "20px 20px rgba(0,0,0,.15)",
            mr: 5,
            transition: "all .4s ease",
            ":hover": {
              borderRadius: " 0% 0% 50% 50% / 0% 0% 5% 5%",
              boxShadow: "10px 10px rgba(0,0,0,.25)",
            },
          }}
          alt="Logo"
          src={images.karimNats2medals}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "40%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Saira Semi Condensed"',
              mb: 3,
            }}
          >
            Sensei Mohamed Ebraheem
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Instructors;
