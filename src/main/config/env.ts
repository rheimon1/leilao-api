export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/leilao-api',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '27017',
  database: process.env.DATABASE || 'leilao',
  user: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || '123456',
  auth: false,
  jwtSecret: process.env.JWT_SECRET,
};
