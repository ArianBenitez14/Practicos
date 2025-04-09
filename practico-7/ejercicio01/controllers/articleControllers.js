const { findAll, customQuery } = require('../dbUsers.js');

const articleController = {
  form: (req, res) => {
    res.sendFile(__dirname + '/UsuariosForm.html');
  },
  index: async (req, res) => {
    const articles = await findAll('articles');
    res.json(articles);
  },
  show: async (req, res) => {
    const [articles, id] = await connection.execute(
      'SELECT id = ? FROM articles'
    );
    res.json(articles);
  },
  store: async (req, res) => {
    const { firstname, lastname, age } = req.body;
    const [articles] = await connection.execute(
      'INSERT INTO articles (firstname, lastname, age) VALUES (?, ?, ?)',
      [firstname, lastname, age]
    );
    res.send('Usuario guardado exitosamente.');
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const [articles] = await connection.execute(
      'UPDATE articles SET firstname = ?, lastname = ?, age = ? WHERE id = ?',
      [firstname, lastname, age, id]
    );
    res.send('Usuario guardado exitosamente.');
    if (!id) {
      return res.status(400).json('Ese ID de usuario no existe.');
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send('Ese ID de usuario no existe.');
    }
    const [articles] = await connection.execute(
      'DELETE FROM articles WHERE id = ?',
      [id]
    );
    if (articles.affectedRows === 0) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.send('Usuario eliminado exitosamente.');
  },
};

module.exports = articleController;
