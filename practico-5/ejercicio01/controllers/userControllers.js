const { findAll, customQuery } = require("../dbUsers.js");

const userController = {
  form: (req, res) => {
    res.sendFile(__dirname + "/UsuariosForm.html");
  },
  index: async (req, res) => {
    const users = await findAll("users");
    res.json(users);
  },
  show: async (req, res) => {
    const [users, id] = await connection.execute("SELECT id = ? FROM users");
    res.json(users);
  },
  store: async (req, res) => {
    const { firstname, lastname, age } = req.body;
    const [users] = await connection.execute(
      "INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)",
      [firstname, lastname, age]
    );
    res.send("Usuario guardado exitosamente.");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const [users] = await connection.execute(
      "UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = ?",
      [firstname, lastname, age, id]
    );
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
    const [users] = await connection.execute("DELETE FROM users WHERE id = ?", [
      id,
    ]);
    if (users.affectedRows === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.send("Usuario eliminado exitosamente.");
  },
};

module.exports = userController;
