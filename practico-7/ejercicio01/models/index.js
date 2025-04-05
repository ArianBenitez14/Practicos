const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('ejercicio_api_sequelize', 'root', 'root', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class User extends Model {}
User.init(
  {
    nombre: DataTypes.STRING(100),
    apellido: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    contraseña: DataTypes.STRING(100),
  },
  { sequelize, modelName: 'users' }
);

class Article extends Model {}
Article.init(
  {
    titulo: DataTypes.STRING(100),
    contenido: DataTypes.STRING(100),
    autor: DataTypes.STRING(100),
  },
  { sequelize, modelName: 'articles' }
);

module.exports = { Article, User, sequelize };
