import mongoose from 'mongoose';
import { env } from '../config/env';

export const connectDB = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};
