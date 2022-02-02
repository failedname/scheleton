const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "localhost",
};
