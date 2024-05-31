const createError = require('http-errors');
const path = require('path')
const logger = require('morgan');
const blogRoute = require("./Routes/Blog.js")
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

app.use(cookieParser());


app.use(cors({
    origin: "http://localhost:5174",
    origin: "http://localhost:5173",
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
}));



app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');

const db = mongoose.connection


db.on('error', console.error.bind(console, 'connection error:'))


app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.use(express.json());

app.use("/", authRoute)
app.use("/blogs", blogRoute)


app.get('/blogs*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html')
})

app.use((req, res, next) => {
  next(createError(404))
})


//error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //render error page
  res.status(err.status || 500)
  res.render('error')
})

