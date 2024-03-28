import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutCard from "./AboutCard";
import images from "../../constants/images";
const Mission = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mb: 10,
        textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "start",
          },
      }}
    >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
            color: "#9d4f4b",
            mb: 5,
            
          }}
        >
          What We Offer
        </Typography>
      <Box 
      >

      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(275px, 1fr))",
            sm: "repeat(auto-fill, minmax(275px, 1fr))",
            md: "repeat(auto-fill, minmax(300px, 1fr))",
            lg: "repeat(auto-fill, minmax(350px, 1fr))",
          }, // Adjust min-width as needed
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AboutCard
          title="Professional Karate Instruction"
          description="We teach Shotokan karate, emphasizing proper technique, discipline, and respect."
          image={images.professional}
        />
        <AboutCard
          title="Boosted Confidence"
          description="We teach Shotokan karate, emphasizing proper technique, discipline, and respect."
          image={images.confidence}
        />
        <AboutCard
          title="Fun and Rewards"
          description="We teach Shotokan karate, emphasizing proper technique, discipline, and respect."
          image={images.fun}
        />
      </Box>
    </Box>
  );
};

export default Mission;
