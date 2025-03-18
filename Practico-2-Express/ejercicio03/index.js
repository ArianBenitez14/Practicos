const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Accediste al servidor.'));

app.get('/saludo/:nombre', (req, res) =>
  res.send('Bienvenid@ al servidor,' + ' ' + req.params.nombre)
);

app.listen(8000, () => console.log('http://localhost:8000'));
