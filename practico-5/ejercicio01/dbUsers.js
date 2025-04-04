const connectionConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "ejercicio_users_db",
};
const mysql = require("mysql2/promise");

async function findAll(tableName) {
  const connection = await mysql.createConnection(connectionConfig);
  const [results, fields] = await connection.execute(
    `SELECT * FROM ${tableName}`
  );
  connection.end();
  return results;
}

async function customQuery(sqlString, values) {
  const connection = await mysql.createConnection(connectionConfig);
  const [results, fields] = await connection.execute(sqlString, values);
  connection.end();
  return results;
}
module.exports = { findAll, customQuery };
