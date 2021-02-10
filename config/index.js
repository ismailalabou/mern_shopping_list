import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb+srv://ismailalabou:root@cluster0.eqb3x.mongodb.net/mern_shopping?retryWrites=true&w=majority",
  MONGO_DB_NAME: process.env.MONGO_DB_NAME || "mern_shopping",
  JWT_SECRET: process.env.JWT_SECRET || "sl_myJwtSecret"
};
