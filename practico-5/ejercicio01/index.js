require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Router = require("./routes/userRoutes.js");
app.use(Router);

app.get("/", async (req, res) => res.send("Accediste al servidor."));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
