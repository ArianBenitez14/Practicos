require("dotenv").config();
const faker = require("@faker-js/faker").fakerES;
const { Article } = require("../models");

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 500; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: faker.number.int({ min: 1, max: 99 }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
