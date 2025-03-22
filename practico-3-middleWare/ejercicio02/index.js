const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(verif);

function verif(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.age) {
    res.status(400).send('Datos inválidos.');
  } else if (typeof req.body.age != 'number' || req.body.age < 18) {
    res.status(400).send('Datos inválidos.');
  } else {
    next();
  }
}

app.get('/', (req, res) => res.send('Accediste al servidor correctamente.'));

app.post('/registro', (req, res) => {
  const { name, email, age } = req.body;
  res.send(name + ' ' + email + ' ' + age);
});

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
