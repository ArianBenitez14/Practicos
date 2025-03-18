const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const jugadores = require('./jugadores.js');

app.get('/', (req, res) => res.send('Accediste al servidor.'));

app.get('/jugador/1', (req, res) =>
  res.send(
    'Mi usuario es' +
      ' ' +
      JSON.stringify(jugadores[0].username) +
      '<br> Mi email es' +
      ' ' +
      JSON.stringify(jugadores[0].email) +
      '<br> Y mi password es' +
      ' ' +
      JSON.stringify(jugadores[0].password)
  )
);

app.get('/jugador/2', (req, res) =>
  res.send(
    'Mi usuario es' +
      ' ' +
      JSON.stringify(jugadores[1].username) +
      '<br> Mi email es' +
      ' ' +
      JSON.stringify(jugadores[1].email) +
      '<br> Y mi password es' +
      ' ' +
      JSON.stringify(jugadores[1].password)
  )
);

app.get('/jugador/3', (req, res) =>
  res.send(
    'Mi usuario es' +
      ' ' +
      JSON.stringify(jugadores[2].username) +
      '<br> Mi email es' +
      ' ' +
      JSON.stringify(jugadores[2].email) +
      '<br> Y mi password es' +
      ' ' +
      JSON.stringify(jugadores[2].password)
  )
);

app.get('/jugador/4', (req, res) =>
  res.send(
    'Mi usuario es' +
      ' ' +
      JSON.stringify(jugadores[3].username) +
      '<br> Mi email es' +
      ' ' +
      JSON.stringify(jugadores[3].email) +
      '<br> Y mi password es' +
      ' ' +
      JSON.stringify(jugadores[3].password)
  )
);

console.log(jugadores);

app.listen(8000, () => console.log('http://localhost:8000'));
