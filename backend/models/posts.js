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
    allowNull: false
  },
  pictureName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  linkId: {
    type: DataTypes.INTEGER(8).ZEROFILL,
    allowNull: false
  },
  LikedBy: {
    type: DataTypes.STRING,
    allowNull:false
  },
});

module.exports = POSTS;