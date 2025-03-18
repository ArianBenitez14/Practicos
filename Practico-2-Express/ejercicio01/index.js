const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

app.get('/', (req, res) => res.send('Accediste al servidor.'));

app.get('/persona', (req, res) =>
  res.send(
    'Mi usuario es' +
      ' ' +
      faker.internet.username() +
      '<br> Mi email es' +
      ' ' +
      faker.internet.exampleEmail() +
      '<br> Y además, mi birthdate es' +
      ' ' +
      faker.date.between({ from: '2000-01-01', to: Date.now() })
  )
);

app.listen(8000, () => console.log('http://localhost:8000'));
