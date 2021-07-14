const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");

//initializations
const app = express();

//settings
app.set("port", process.env.PORT | 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exhbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//Midlewares
app.use(express.urlencoded({ extended: false }));
//global variables

//Routes
app.use(require("./routes/index.routes"));

//static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
