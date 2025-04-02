const mysql = require('mysql2/promise');

let connection;
async function connect() {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ejercicio_users_db',
  });
}

connect();

function userVerif(req, res, next) {
  if (!req.body.firstname || !req.body.lastname || !req.body.age) {
    return res.status(400).send('Usuario inválido.');
  } else {
    next();
  }
}

async function findOne() { ... }
async function findAll() { ... }
async function create() { ... }
async function update() { ... }
async function deleteUser() { ... }
module.exports = { findOne, findAll, create, update, deleteUser, userVerif };
