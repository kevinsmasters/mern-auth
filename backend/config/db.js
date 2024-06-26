import mongoose from 'mongoose';

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`);
    proceess.exit(1);
  }
}

export default connectDB;