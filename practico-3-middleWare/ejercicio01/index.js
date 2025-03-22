const express = require('express');
const app = express();
app.use(logReg);

function logReg(req, res, next) {
  console.log(`${req.protocol}://${req.hostname}:8000${req.originalUrl}`);
  next();
}

app.get('/', (req, res) => res.send('Accediste al servidor correctamente.'));

app.get('/saludo', (req, res) => res.send('Hola mundo.'));

app.get('/despedida', (req, res) => res.send('Adiós.'));

app.post('/registro', (req, res) => res.send('Registro recibido.'));

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
