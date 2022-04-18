const { Pool } = require('pg');
// const { config } = require('../config/config.js');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'carlos',
//   password: 'admin123',
//   database: 'my_store',
// });

const USER = encodeURIComponent('carlos');
const PASSWORD = encodeURIComponent('admin123');
const URI = `postgres://${USER}:${PASSWORD}@localhost:5432/my_store`;

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
