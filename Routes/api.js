const express = require('express'); // Import Express to create API routes
const router = express.Router(); // Create a new router object for handling routes
const Product = require('../models/product'); // Import the Product model
const Review = require('../models/review'); // Import the Review model
const User = require('../models/user'); // Import the User model


// Example of creating a product
router.post('/products', async (req, res) => {
  const { name, description, image } = req.body;
  const newProduct = new Product({ name, description, image });
  await newProduct.save();
  res.status(201).json(newProduct);
});

// Get all products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//  a review
router.post()'/reviews', async (req, res) => {
  const { productId, userId, rating, reviewText } = req.body;
  const newReview = new Review()}
