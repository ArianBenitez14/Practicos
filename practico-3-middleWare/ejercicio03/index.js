const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let registros = [];

function loginVerif(req, res, next) {
  if (!req.body.user || !req.body.password) {
    return res.status(400).send('Credenciales inválidas.');
  } else {
    next();
  }
}

app.get('/', (req, res) => res.send('Accediste al servidor correctamente.'));

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', loginVerif, (req, res) => {
  const { user, password } = req.body;
  registros.push({ usuario: user, contraseña: password });
  res.send('Bienvenido/a ' + user);
});

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
