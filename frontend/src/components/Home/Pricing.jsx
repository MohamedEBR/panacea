import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/material/Typography";
import Check from "@mui/icons-material/Check";
import { CustomBox } from "../shared/CustomBox";

export default function Pricing() {
  return (
    <CustomBox
      sx={{
        p: "3% 7%",
        my: 10,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",

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
          color: "#fff",
          my: 3,
        }}
      >
        Pricing
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Saira Semi Condensed"',
          color: "#fff",
          mt: 3,
          mb: 5,
        }}
      >
        We offer flexible membership plans to suit your needs and budget.
      </Typography>
      <Box
        component="div"
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
        <Card
          size="lg"
          variant="outlined"
          sx={{
            mx: 2,
          }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            B
          </Chip>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Saira Semi Condensed"' }}
          >
            Beginner
          </Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              2 hr/week
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Saira Semi Condensed"',
                mr: "auto",
                width: "100%",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
                color: "#9d4f4b",
              }}
            >
              $85{" "}
              <Typography variant="body2" color="text.secondary">
                / month
              </Typography>
            </Typography>
          </CardActions>
        </Card>
        <Card
          size="lg"
          variant="outlined"
          sx={{
            mx: 2,
          }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            A
          </Chip>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Saira Semi Condensed"' }}
          >
            Beginner
          </Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              2 hr/week
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Saira Semi Condensed"',
                mr: "auto",
                width: "100%",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
                color: "#9d4f4b",
              }}
            >
              $105{" "}
              <Typography variant="body2" color="text.secondary">
                / month
              </Typography>
            </Typography>
          </CardActions>
        </Card>
        <Card
          size="lg"
          variant="outlined"
          sx={{
            mx: 2,
          }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            Basic
          </Chip>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Saira Semi Condensed"' }}
          >
            Elite
          </Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              2 hr/week
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Saira Semi Condensed"',
                mr: "auto",
                width: "100%",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
                color: "#9d4f4b",
              }}
            >
              $150{" "}
              <Typography variant="body2" color="text.secondary">
                / month
              </Typography>
            </Typography>
          </CardActions>
        </Card>
        <Card
          size="lg"
          variant="outlined"
          sx={{
            mx: 2,
          }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            Basic
          </Chip>
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Saira Semi Condensed"' }}
          >
            International
          </Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              2 hr/week
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Financial Analytics
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Checking Account
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              API Integration
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Saira Semi Condensed"',
                mr: "auto",
                width: "100%",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
                color: "#9d4f4b",
              }}
            >
              $250{" "}
              <Typography variant="body2" color="text.secondary">
                / month
              </Typography>
            </Typography>
          </CardActions>
        </Card>
      </Box>
     
    </CustomBox>
  );
}
