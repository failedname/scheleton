const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(__dirname, process.env.NODE_ENV + ".env"),
});

module.exports = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "localhost",
  NODE_ENV: process.env.NODE_ENV || "development",
};
