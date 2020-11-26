const sequelize = require('./connect');
const sq = require('sequelize')

module.exports = sequelize.define('User', {
  // Model attributes are defined here
  id: {
      type: sq.INTEGER,
      primaryKey: true,
      allowNull: false
  },
  username: {
    type: sq.STRING,
      allowNull: false,
  },
  nama: {
    type: sq.STRING,
      allowNull: false,
    // allowNull defaults to true
  },
  password: {
      type: sq.STRING,
      allowNull: false,
  }
}, {
  // Other model options go here
});