const { Sequelize } = require('sequelize');
const USER = encodeURIComponent('carlos');
const PASSWORD = encodeURIComponent('admin123');
const URI = `postgres://${USER}:${PASSWORD}@localhost:5432/my_store`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize;
