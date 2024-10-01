import React, { useState } from 'react'; // Import React and the useState hook for managing state

// ReviewForm component definition
function ReviewForm({ productId, setReviews }) { // Accepts productId and a function to update reviews
  const [rating, setRating] = useState(0); // State to hold the review rating
  const [reviewText, setReviewText] = useState(''); // State to hold the review text

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a review object with the rating, text, and product ID
    const newReview = { 
      productId: productId, // Use the passed product ID
      rating: rating, // Use the state rating value
      reviewText: reviewText // Use the state text value
    };

    // Make a POST request to the backend to save the new review
    await axios.post('http://localhost:5000/api/reviews', newReview); // Send review to the API
    
    setReviews(prevReviews => [...prevReviews, newReview]); // Update the reviews state by adding the new review
    setRating(0); // Reset the rating state
    setReviewText(''); // Reset the review text state
  };

  return (
    <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to form submission */}
      <label>
        Rating: 
        <input 
          type="number" // Input type for rating
          value={rating} // Set the input value to the rating state
          onChange={(e) => setRating(e.target.value)} // Update rating state on change
          min="1" // Minimum rating value
          max="5" // Maximum rating value
          required // Make this field required
        />
      </label>
      <br />
      <label>
        Review: 
        <textarea 
          value={reviewText} // Set the value of the textarea to reviewText state
          onChange={(e) => setReviewText(e.target.value)} // Update reviewText state on change
          required // Make this field required
        />
      </label>
      <br />
      <button type="submit">Submit Review</button> {/* Button to submit the form */}
    </form>
  );
}

export default ReviewForm; // Export ReviewForm component
