const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const POSTS = sequelize.define("POSTS", {
  postId: {
    type: DataTypes.INTEGER(8).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false
  },
  modelCarsId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  pictureName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  linkId: {
    type: DataTypes.INTEGER(8).ZEROFILL,
    allowNull: true
  },
  LikedBy: {
    type: DataTypes.STRING,
    allowNull:true
  },
});

module.exports = POSTS;