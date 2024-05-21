import mongoose from 'mongoose';

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.NODE_ENV == 'test' ? process.env.MONGO_TEST_URI : process.env.MONGO_TEST_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
    console.log(`env: ${process.env.NODE_ENV}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    proceess.exit(1);
  }
}

export default connectDB;