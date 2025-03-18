const { faker } = require('@faker-js/faker');

var jugadores = [
  {
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
];
module.exports = jugadores;
