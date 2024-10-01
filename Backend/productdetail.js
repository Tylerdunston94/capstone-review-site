
import React, { useEffect, useState } from 'react'; // Import React and hooks
import axios from 'axios'; // Import Axios for making HTTP requests
import { useParams } from 'react-router-dom'; // Import useParams to get dynamic URL parameters
import ReviewForm from './ReviewForm'; // Import the ReviewForm component

// ProductDetail component
function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product, setProduct] = useState(null); // State for holding product data
  const [reviews, setReviews] = useState([]); // State for holding reviews data

  useEffect(() => { // useEffect to fetch data when the component mounts
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`); // Fetch product data
      setProduct(response.data); // Update product state with the fetched product
    };
    
    const fetchReviews = async () => { 
      const reviewResponse = await axios.get(`http://localhost:5000/api/reviews?productId=${id}`); // Fetch reviews for this product
      setReviews(reviewResponse.data); // Update reviews state with fetched reviews
    };
    
    fetchProduct(); // Call the function to fetch product data
    fetchReviews(); // Call the function to fetch reviews
  }, [id]); // Run when the component mounts or when ID changes

  // Render loading state while fetching product details
  if (!product) {
    return <p>Loading...</p>; // Display a loading text while the product data is being fetched
  }

  return (
    <div>
      <h2>{product.name}</h2> {/* Display product name */}
      <p>{product.description}</p> {/* Display product description */}
      <img src={product.image} alt={product.name} /> {/* Display product image */}
      <h3>Average Rating: {product.averageRating}</h3> {/* Display average rating of the product */}

      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => ( // Map through the reviews to display them
          <li key={review._id}> {/* Unique key for each review item */}
            <p>Rating: {review.rating}</p> {/* Display rating of the review */}
            <p>{review.reviewText}</p> {/* Display review text */}
          </li>
        ))}
      </ul>

      <h3>Submit a Review:</h3>
      <ReviewForm productId={product._id} setReviews={setReviews} /> {/* Render ReviewForm component to submit a new review */}
    </div>
  );
}

export default ProductDetail; // Export ProductDetail component
bb