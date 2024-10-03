const express = require('express'); // Import Express to create API routes
const router = express.Router(); // Create a new router object for handling routes
const client = require('../db/client')
// const Product = require('../models/product'); // Import the Product model
// const Review = require('../models/review'); // Import the Review model
// const User = require('../models/user'); // Import the User model


// Get all products
router.get('/products', async (req, res) => {
    const SQL = `
    SELECT * FROM products;
    `
    const response = client.query(SQL)
    const products = response.rows
  
    // const products = await Product.find();
    res.json(products);
  });

  // Get a products
router.get('/products/:products_id', async (req, res) => {
    const SQL = `
   
    `
    //SELECT FROM products WHERE id = ?
    const response = client.query(SQL)
    const product = response.rows
  
    // const products = await Product.find();
    res.json(product);
  });




  // CREATE Comments a products
// router.post('/comments/:products_id', async (req, res) => {
//  get user_id from req.body
// get comment from rec.body
//call your createCommentFunction with the user_id, product_id and comment
//     const comment = response.rows[0]
  
//     res.json(comment);
//   });





