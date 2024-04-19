const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const createError = require('http-errors');
const path = require('path')
const cookieParser = require("cookie-parser");
const logger = require('morgan');
const authRoute = require("./Routes/AuthRoute.js");
const blogRoute = require("./Routes/Blog.js")

const app = express();

require("dotenv").config();


//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');


//DB Section
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

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))


//setup
app.use(logger('dev'))
app.use(express.json);
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.static('public'))

//Routes section
app.use("/", authRoute)
app.use("/blogs", blogRoute)


//Return the client
app.get('/blogs*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/index.html')
})


//Catch 404 Error and forward to error Handler
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


//Listening PORT
app.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
})



module.exports = app
