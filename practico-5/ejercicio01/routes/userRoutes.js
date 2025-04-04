const userVerif = require("../middlewares/userVerif");
const userController = require("../controllers/userControllers");
const express = require("express");
const app = express.Router();

app.get("/usuarios", userController.index);

app.get("/usuarios/crear", userController.form);

app.post("/usuarios/", userVerif, userController.store);

app.patch("/usuarios/editar/:id", userVerif, userController.update);

app.delete("/usuarios/eliminar/:id", userVerif, userController.destroy);

module.exports = app;
