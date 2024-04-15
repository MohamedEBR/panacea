import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { userRouter } from "./Routes/User.js";
import { blogRouter } from "./Routes/Blog.js";

dotenv.config();

const port = 8080;
const app = express();

app.use(bodyParser.json()); // Parses JSON Data
app.use(express.urlencoded({extended: true})); //Parses Url encoded Data

app.use(cors({
    origin: "http://localhost:5174",
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
}));

//routes
app.use('/', userRouter);
app.use('/api/blogs', blogRouter);

app.post('/api/blogs', (req, res) => {
    res.send("This is a blog")
})

app.post('/login', (req, res) => {
    res.send("This is a login")
})

app.post('/signup', (req, res) => {
    res.send("This is a signup")
    res.json(req.body)
})

const DB = process.env.DBURI

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("connection established")
}).catch((e) => {
    console.log(e)
})

app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})