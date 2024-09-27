const express = require('express'); // Import the Express framework to create a server
const mongoose = require('mongoose'); // Import Mongoose for MongoDB object modeling
const cors = require('cors'); // Import CORS to enable cross-origin resource sharing
const apiRoutes = require('./routes/api'); // Import the API routes defined in another file
require('dotenv').config(); // Load environment variables from a .env file

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 5000; // Set the server's port from environment variable or default to 5000

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to MongoDB using the URI defined in environment variables
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected')) // Log a success message if connection is successful
  .catch(err => console.log(err)); // Log an error message if there is a connection error

// Set up API routes to handle requests starting with /api
app.use('/api', apiRoutes);

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Log a message indicating the server is running
});
