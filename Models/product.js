const mongoose = require('mongoose'); // Import Mongoose to define a MongoDB schema

// Define the Product schema with fields for product details
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name must be a string and is required
    description: { type: String }, // Description can be a string and is optional
    image: { type: String }, // Image must be a string (URL) and is optional
    averageRating: { type: Number, default: 0 }, // Average rating is a number, default is set to 0
});

module.exports = mongoose.model('Product', ProductSchema); // Export the Product model created from the schema
