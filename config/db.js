const mongoose = require('mongoose'); // Import Mongoose for database connection

const connectDB = async () => { // Asynchronous function to connect to the database
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to MongoDB
    console.log('MongoDB connected'); // Log a success message
  } catch (error) {
    console.error(error.message); // Log any error messages encountered
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB; // Export the connectDB function for use in other files
