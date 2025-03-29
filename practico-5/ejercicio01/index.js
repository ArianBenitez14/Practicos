const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let connection;
async function connect() {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ejercicio_users_db',
  });
}

connect();

function usuarioVerif(req, res, next) {
  if (!req.body.firstname || !req.body.lastname || !req.body.age) {
    return res.status(400).send('Usuario inválido.');
  } else {
    next();
  }
}

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
