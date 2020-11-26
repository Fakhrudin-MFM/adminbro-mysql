const { Sequelize } = require('sequelize');

module.exports = new Sequelize('crud_user', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
});

