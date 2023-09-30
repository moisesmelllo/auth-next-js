import mongoose from "mongoose";


// MONGO_URL é a chave que você pega no mongodb e estou
// salvando dentro de .env
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    })

    connection.on('error', (err) => {
      console.log('MongoDB connection error. Please make sure Mongo DB is running.' + err);
      process.exit
    })
  } catch (error) {
    console.log('Something goes wrong!')
    console.log(error)
  }
}