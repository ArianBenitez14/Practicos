const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let correos = [];

app.get("/", (req, res) =>
  res.send("Accediste a la base de correos de la empresa.")
);

app.get("/subscribe", (req, res) => {
  res.sendFile(__dirname + "/subscribe.html");
});

app.get("/subscribe", (req, res) => {
  const { email } = req.body;

  if (correos.includes(email)) {
    return res.send("¡Correo ya existente!");
  } else {
    correos.push({ correo: email });
    res.send("¡Bienvenido a Transamerican!");
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
