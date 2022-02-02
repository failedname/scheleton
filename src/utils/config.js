const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "localhost",

  USERDB: process.env.USERDB,
  PASSWORDDB: process.env.PASSWORDDB,
  DB: process.env.DATABASE,
  PORTDB: process.env.PORTDB,
  HOSTDB: process.env.HOSTDB,
};
