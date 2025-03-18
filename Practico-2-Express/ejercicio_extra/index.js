const express = require('express');
const app = express();

var usuarios = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Accediste al servidor.'));

app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/registro.html');
});

app.post('/usuarios', (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).send('Usuario y contraseña son obligatorios.');
  }

  usuarios.push({ usuario: user, contraseña: password });
  res.send('Credenciales guardadas');
});

app.get('/usuarios', (req, res) => res.send(usuarios));

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
