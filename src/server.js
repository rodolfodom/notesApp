const express = require("express");
const path = require("path");

//initializations
const app = express();

//settings
app.set("port", process.env.PORT | 3000);
app.set("views", path.join(__dirname, "views"));

//Midlewares
app.use(express.urlencoded({ extended: false }));
//global variables

//Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

//static files
app.set(express.static, path.join(__dirname, "public"));

module.exports = app;
