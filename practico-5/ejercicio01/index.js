require('dotenv').config();
const express = require('express');
const app = express();
const dbUsers = require('./dbUsers.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => res.send('Accediste al servidor.'));

app.get('/usuarios', async (req, res) => {
  const [users] = await connection.execute('SELECT * FROM users');
  res.json(users);
});

app.get('/usuarios/crear', (req, res) => {
  res.sendFile(__dirname + '/UsuariosForm.html');
});

app.post('/usuarios/', usuarioVerif, async (req, res) => {
  const { firstname, lastname, age } = req.body;
  const [users] = await connection.execute(
    'INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)',
    [firstname, lastname, age]
  );
  res.send('Usuario guardado exitosamente.');
});

app.patch('/usuarios/editar/:id', usuarioVerif, async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const [users] = await connection.execute(
    'UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = ?',
    [firstname, lastname, age, id]
  );
  res.send('Usuario guardado exitosamente.');
  if (!id) {
    return res.status(400).json('Ese ID de usuario no existe.');
  }
});

app.delete('/usuarios/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Ese ID de usuario no existe.');
  }
  const [users] = await connection.execute('DELETE FROM users WHERE id = ?', [
    id,
  ]);
  if (users.affectedRows === 0) {
    return res.status(404).send('Usuario no encontrado');
  }
  res.send('Usuario eliminado exitosamente.');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
