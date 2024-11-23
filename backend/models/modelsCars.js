const {DataTypes} = require("sequelize");

const sequelize = require("../config/database");

const PICTURESCARS = require("./picturesCars");
const POSTS = require("./posts");

const MODELCARS = sequelize.define("MODELCARS", {
  modelCarsId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  season: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  team: {
    type: DataTypes.STRING,
    allowNull:false
  },
  model: {
    type: DataTypes.STRING,
    allowNull:false
  },
  driver: {
    type: DataTypes.STRING,
    allowNull:false
  },
  race: {
    type: DataTypes.STRING,
    allowNull:true
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull:true
  },
  reference: {
    type: DataTypes.STRING,
    allowNull:true
  },
  status: {
    type: DataTypes.STRING,
    allowNull:false
  },
  imageName: {
    type: DataTypes.STRING,
    allowNull:false
  },
  LikedBy: {
    type: DataTypes.STRING,
    allowNull:true
  },
});

MODELCARS.hasMany(PICTURESCARS, {foreignKey: "modelCarsId", onDelete: "CASCADE"});
MODELCARS.hasMany(POSTS, {foreignKey: "modelCarsId", onDelete: "CASCADE"});

module.exports = MODELCARS;

