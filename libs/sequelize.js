const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

const USER = encodeURIComponent('carlos');
const PASSWORD = encodeURIComponent('admin123');
const URI = `postgres://${USER}:${PASSWORD}@localhost:5432/my_store`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;
