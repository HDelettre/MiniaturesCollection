// EXPRESS
const express = require("express");

// LOADING ENVIRONMENT VARIABLES - PORT_USED
require("dotenv").config({
  path: "./config/.env",
});

// PATH TO ROUTES
const routesModelCars = require("./routes/modelsCars");
const routesPictureCars = require("./routes/picturesCars");
// const routesUsers = require("./users/routes");
// const routesPosts = require("./posts/routes");

// MYSQL / SEQUELIZE
const sequelize = require("./config/database");
// Synchronization of models
require("./models/modelsCars");
require("./models/picturesCars");
// require("./users/models");
// require("./posts/models");

sequelize.sync({ alter: true });
// sequelize.sync({ force: true });

const app = express();

app.use("/pictures", express.static(__dirname + "/pictures"));

// CORS
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

// ROUTES CALLING
app.use("/api/modelCars", routesModelCars);
app.use("/api/pictureCars", routesPictureCars);
// app.use("/api/user", routesUsers);
// app.use("/api/post", routesPosts);

// EXPORTS
module.exports = app;
