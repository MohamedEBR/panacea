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
        alignItems: { xs: "center", sm: "center", md: "center", lg: "start" },
        justifyContent: "center",
        height: "100%",
        textAlign: { xs: "center", sm: "center", md: "center", lg: "start" },
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
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center", md: "center", lg: "start" },
          mb: 20,
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "50%" },
            height: "500px",
            objectFit: "cover",
            objectPosition: "50% 35%",
            position: "relative",
            mb: { xs: 5, sm: 5, md: 5, lg: 0 },
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
          src={images.Amr}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Saira Semi Condensed"',
              width: "100%",

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
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }, // Only change here (md: "row")
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }, // Minor adjustment (md: "flex-start")
          mb: 20,
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "50%" },
            height: "500px",
            objectFit: "cover",
            objectPosition: "50% 35%",
            position: "relative",
            borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
            boxShadow: "20px 20px rgba(0,0,0,.15)",
            mb: { xs: 5, sm: 5, md: 5, lg: 0 },
            mr: 5,
            transition: "all .4s ease",
            ":hover": {
              borderRadius: "0% 0% 50% 50% / 0% 0% 5% 5%",
              boxShadow: "10px 10px rgba(0,0,0,.25)",
            },
          }}
          alt="Logo"
          src={images.Karim}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" }, // Adjust width on medium screens
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Saira Semi Condensed"', mb: 3, width: "100%" }}
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
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center", md: "center", lg: "start" },
          mb: 10,
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "65%", md: "50%", lg: "35%" },
            height: "500px",
            objectFit: "none",
            objectPosition: "center",
            position: "relative",
            borderRadius: " 0% 0% 0% 0% / 0% 0% 0% 0%",
            boxShadow: "20px 20px rgba(0,0,0,.15)",
            mr: 5,
            mb: { xs: 5, sm: 5, md: 5, lg: 0 },
            transition: "all .4s ease",
            ":hover": {
              borderRadius: " 0% 0% 50% 50% / 0% 0% 5% 5%",
              boxShadow: "10px 10px rgba(0,0,0,.25)",
            },
          }}
          alt="Logo"
          src={images.Mohamed}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Saira Semi Condensed"',
              mb: 3,
              width: "100%",
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
