const http = require('http');
const personas = require('./personas.js');

const server = http.createServer((req, res) => {
  var filtradas = [];
  for (let index = 0; index < personas.length; index++) {
    if (index % 2 != 0) {
      filtradas.push(personas[index]);
    }
  }
  res.end(JSON.stringify(filtradas));
});

server.listen(8000, () => {
  console.log('http://localhost:8000');
});
