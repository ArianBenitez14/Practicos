const { sequelize } = require('./models/index.js');

async function createTables() {
  await sequelize.sync({ force: true });
  console.log('¡Las tablas fueron creadas!');
}

createTables();
