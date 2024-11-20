const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const USERS = sequelize.define("USERS", {
  puserId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull:false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull:false
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull:false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull:false
  },
  fonction: {
    type: DataTypes.STRING,
    allowNull:false
  },
  modelLiked: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  pictureLiked: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  postLiked: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  postNumber: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  lastPost: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
});

module.exports = USERS;