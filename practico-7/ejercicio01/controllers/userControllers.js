require("dotenv").config();
const { User } = require("../models/index");

const userController = {
  form: (req, res) => {
    res.sendFile(__dirname + "/UsuariosForm.html");
  },
  index: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },
  show: async (req, res) => {
    const [users, id] = await User.findByPk();
    res.json(users);
  },
  store: async (req, res) => {
    const { firstname, lastname, age } = req.body;
    const user = await User.create();
    console.log(user);
    res.send("Usuario guardado exitosamente.");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const [users] = await User.update();
    res.send("Usuario guardado exitosamente.");
    if (!id) {
      return res.status(400).json("Ese ID de usuario no existe.");
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Ese ID de usuario no existe.");
    }
    const [users] = await User.destroy();
    if (users.affectedRows === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.send("Usuario eliminado exitosamente.");
  },
};

module.exports = userController;
