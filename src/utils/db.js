const { Sequelize } = require("sequelize");
const config = require("./config");
const sequelize = new Sequelize(config.DB, config.USERDB, config.PASSWORDDB, {
  host: config.HOSTDB,
  dialect: "postgres",
});

module.exports = sequelize;
