require("dotenv").config();
const faker = require("@faker-js/faker").fakerES;
const { User } = require("../models");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email({
        firstName: "",
        lastName: "",
        provider: "student.ha.dev",
      }),
      password: faker.internet.password({ length: 20 }),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
