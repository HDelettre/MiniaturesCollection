const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const PICTURECARS = sequelize.define("PICTURECARS", {
  pictureCarsId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  modelCarsId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false
  },
  pictureName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  legend: {
    type: DataTypes.STRING,
    allowNull: true
  },
  LikedBy: {
    type: DataTypes.STRING,
    allowNull:true
  },
});

module.exports = PICTURECARS;