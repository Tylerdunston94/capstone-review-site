const mongoose = require('mongoose'); // Import Mongoose to define a MongoDB schema

// Define the User schema with username and password fields
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Username must be a string, required, and unique
    password: { type: String, required: true }, // Password must be a string and is required
});

module.exports = mongoose.model('User', UserSchema); // Export the User model created from the schema
