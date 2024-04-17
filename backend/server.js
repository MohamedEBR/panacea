const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");

const { DBURI, PORT } = process.env;

mongoose
  .connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.use(cors({
    origin: "http://localhost:5174",
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
}));


app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute)