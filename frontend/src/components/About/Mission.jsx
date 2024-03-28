import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Mission = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      mb: 10,
    }}>
<Box>
      <Typography
          variant="h6"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
            color: "#9d4f4b",
          }}
        >
          Vision
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
          We envision Panacea Karate Academy as a beacon of self-improvement and personal growth within our community. We see our dojo evolving into a place where students of all ages transform into well-rounded individuals, radiating confidence and a strong sense of self. We aspire to be recognized for fostering a legacy of excellence in karate, not just in physical prowess, but also in the positive impact we have on our students' lives.
        </Typography>
    </Box>
    <Box sx={{
      mt:4
    }}>
      <Typography
          variant="h6"
          sx={{
            fontFamily: '"Saira Semi Condensed"',
            color: "#9d4f4b",
          }}
        >
          Mission
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
          Our mission is to empower individuals of all ages and backgrounds through the traditional practice of karate. We strive to cultivate not only physical strength and self-defense skills, but also inner discipline, respect, and a sense of community. By fostering a supportive environment where dedication and perseverance are celebrated, we aim to equip our students with the confidence and resilience to excel both on and off the dojo floor.
        </Typography>
    </Box>
    </Box>
  )
}

export default Mission