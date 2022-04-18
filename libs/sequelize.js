const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

//cadena de conexion para posgres
// const USER = encodeURIComponent('carlos');
// const PASSWORD = encodeURIComponent('admin123');
// const URI = `postgres://${USER}:${PASSWORD}@localhost:5432/my_store`;

// const sequelize = new Sequelize(URI, {
//   dialect: 'postgres',
//   logging: true,
// });

const USER = encodeURIComponent('root');
const PASSWORD = encodeURIComponent('admin123');
const URI = `mysql://${USER}:${PASSWORD}@localhost:3309/my_store`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;
