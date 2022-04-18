const { env } = require('../env');

const config = {
  port: env.PORT,
  dbUser: env.DB_USER,
  dbPassword: env.DB_PASSWORD,
  dbHost: env.DB_HOST,
  dbName: env.DB_NAME,
  dbPort: env.DB_PORT,
};

module.exports = { config };
