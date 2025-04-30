export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  jwt: {
    secret: process.env.ACCESS_TOKEN_SECRET_KEY,
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
  },
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
