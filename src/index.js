const config = require("./utils/config");
const express = require("express");
const sequelize = require("./utils/db");
require("dotenv").config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(config.PORT, config.HOST, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server running on http://${config.HOST}:${config.PORT}`);
});
