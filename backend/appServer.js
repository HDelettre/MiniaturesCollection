// EXPRESS
const express = require("express");

// LOADING ENVIRONMENT VARIABLES - PORT_USED
require("dotenv").config({
  path: "./config/.env",
});

// PATH TO ROUTES
const routesModelCars = require("./routes/modelsCars");
const routesPictureCars = require("./routes/picturesCars");
const routesPosts = require("./routes/posts");
const routesUsers = require("./routes/users");

// MYSQL / SEQUELIZE
const sequelize = require("./config/database");
// Synchronization of models
require("./models/modelsCars");
require("./models/picturesCars");
require("./models/posts");
require("./models/users");

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
app.use("/api/posts", routesPosts);
app.use("/api/users", routesUsers);

// EXPORTS
module.exports = app;
