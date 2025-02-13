const mongoose = require('mongoose');

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB successfully...');
  } catch (error) {
    console.log(`Unable to connect with MongoDB => ${error}`);
  }
}

module.exports = connection;