const http = require('http');
const fs = require('fs');
const { format, nextWednesday } = require('date-fns');
const { es } = require('date-fns/locale');

const server = http.createServer((req, res) => {
  fs.appendFile(
    'access_log.txt',
    format(
      new Date(),
      "'Se llamó al servidor el' i 'de' MMMMM 'del' y 'a las' pp (cccc)",
      { locale: es }
    ) + '\n',
    function (err) {
      if (err) throw err;
      console.log('Guardado');
    }
  );
  res.end('hola');
});

server.listen(8000, () => {
  console.log('http://localhost:8000');
});
