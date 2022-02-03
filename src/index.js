const config = require("./utils/config");
const express = require("express");
const db = require("./models/index");
const routes = require("./routes/routes");
const secureRoutes = require("./routes/secure_route");
const passport = require("passport");
require("./controllers/auth");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  secureRoutes
);
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(config.PORT, config.HOST, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server running on http://${config.HOST}:${config.PORT}`);
});
