const mongoose = require('mongoose'); // Import Mongoose to define a MongoDB schema

// Define the Review schema with productId, userId, rating, and reviewText fields
const ReviewSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Reference to the Product model
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
    rating: { type: Number, required: true }, // Rating is a number and is required
    reviewText: { type: String }, // Review text can be a string and is optional
});

module.exports = mongoose.model('Review', ReviewSchema); // Export the Review model created from the schema


