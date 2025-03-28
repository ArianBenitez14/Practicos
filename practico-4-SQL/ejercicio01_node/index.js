const express = require("express");
const app = express();
const productos = require("./products.json");
app.use(express.json());

const getProducts = (req, res) => {
  return res.send(productos);
};

const getProductsById = (req, res) => {
  const { id } = req.params;
  const filteredproduct = productos.filter(
    (product) => parseInt(id) === product.id
  );

  return res.send(filteredproduct);
};

app.get("/", (req, res) => res.send("Accediste a la base de productos."));

app.get("/productos", getProducts);

app.get("/productos/:id", getProductsById);

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;
  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
  };
  if (!nombre || !precio) {
    return res.status(400).send("El producto debe contener nombre y precio.");
  }
  productos.push(nuevoProducto);

  res.send("¡Producto añadido exitosamente!");
});

app.put("/productos/:id", (req, res) => {
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
    .json("Ese ID de producto no existe, por lo tanto no se puede actualizar.");
});

app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  const indexProducto = productos.findIndex(
    (producto) => producto.id.toString() === id
  );

  const productoEliminado = productos.splice(indexProducto, 1);

  if (indexProducto === -1) {
    return res.send("Este ID de producto no existe.");
  }

  res.send("Producto eliminado.");
  console.log(productoEliminado);
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
