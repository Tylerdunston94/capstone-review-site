import React from 'react'; // Import React library
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router and routing methods
import ProductList from './components/ProductList'; // Import ProductList component
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component
import './App.css'; // Import application styles

// Main App component
function App() {
  return (
    <Router> {/* Enable routing in the application */}
      <div className="App">
        <h1>Product Review Site</h1> {/* Title of the app */}
        <Switch> {/* Switch between routes */}
          <Route exact path="/" component={ProductList} /> {/* Route for Product List */}
          <Route path="/product/:id" component={ProductDetail} /> {/* Route for Product Detail */}
        </Switch>
      </div>
    </Router>
  );
}

export default App; // Export App component for use in index.js
