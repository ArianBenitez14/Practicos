const express = require('express');
const { sequelize } = require('./models');
const app = express();

app.get('/', sequelize, (req, res) => res.send('Accediste exitosamente.'));

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
