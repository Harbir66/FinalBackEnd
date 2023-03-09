module.exports = {
  development: {
    username: 'postgres',
    password: 'password',
    database: 'backend',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5443,
  },
  test: {
    username: 'postgres',
    password: 'password',
    database: 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5443,
  },
};
