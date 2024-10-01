import React, { useEffect, useState } from 'react'; // Import React and hooks
import axios from 'axios'; // Import Axios for making HTTP requests
import { Link } from 'react-router-dom'; // Import Link for navigation

// ProductList component
function ProductList() {
  const [products, setProducts] = useState([]); // State to hold product data

  useEffect(() => { // useEffect to fetch data after component mounts
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products'); // Fetch products from API
      setProducts(response.data); // Update state with product data
    };
    fetchProducts(); // Call fetch function
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h2>Product List</h2> {/* Title for Product List */}
      <ul>
        {products.map((product) => ( // Map through the products
          <li key={product._id}> {/* Unique key for each list item */}
            <Link to={`/product/${product._id}`}>{product.name}</Link> {/* Link to product detail */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList; // Export ProductList component
