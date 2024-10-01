import React from 'react'; // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering the app
import App from './App'; // Import the main App component
import './index.css'; // Import styling

// Render the App component into the root element in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The HTML element where the React app will be mounted
);
