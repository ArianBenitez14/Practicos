require("dotenv").config();
const express = require("express");
const app = express();

const userRoutes = require("../ejercicio01/routes/userRoutes");
const articleRoutes = require("../ejercicio01/routes/articleRoutes");

module.exports = (app) => {
  app.use("/users", userRoutes);
  app.use("/articles", articleRoutes);
};

app.get("/", (req, res) => res.send("Accediste exitosamente."));

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
