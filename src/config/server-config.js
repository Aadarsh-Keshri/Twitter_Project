import dotenv from 'dotenv';

dotenv.config();

export const DB_CONNECTION_STRING=process.env.DB_CONNECTION_STRING;
export const PORT=process.env.PORT;
export const SALT_ROUNDS=process.env.SALT_ROUNDS;