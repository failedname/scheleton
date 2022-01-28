const config = require("./utils/config");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(config.PORT, config.HOST, () => {
  console.log(`Server running on http://${config.HOST}:${config.PORT}`);
});