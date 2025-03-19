const express = require('express');
const app = express();
app.use(express.json());

var productos = [];

app.get('/', (req, res) => res.send('Accediste a la base de datos.'));

app.get('/productos', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json('Ese ID de producto no existe.');
  }
  res.send(productos);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  for (const producto of productos) {
    if (id === producto.id.toString()) {
      return res.send(producto);
    }
  }
  res.status(400).json('Ese ID de producto no existe.');
});

app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  productos.push({ nombre: nombre, precio: precio, id: productos.length + 1 });
  res.json(productos);
});

app.patch('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  for (const producto of productos) {
    if (id === producto.id.toString()) {
      producto.nombre = nombre;
      producto.precio = precio;
      return res.json(producto);
    }
  }
  res
    .status(400)
    .json('Ese ID de producto no existe, por lo tanto no se puede actualizar.');
});

app.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  for (const producto of productos) {
    if (id === producto.id.toString()) {
      // delete producto;
      return res.send('eliminado');
    }
  }
  res
    .status(400)
    .json('Ese ID de producto no existe, por lo tanto no se pudo eliminar.');
});

app.listen(8000, () => {
  console.log('http://localhost:8000');
});
