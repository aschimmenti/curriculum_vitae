import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import SinglePage from './pages/SinglePage';
import Footer from './components/Footer';
import './styles.css';

function App() {
  // Get the basename from PUBLIC_URL for proper routing in both development and production
  const basename = process.env.PUBLIC_URL || '';

  return (
    <Router basename={basename}>
      <div className="app">
        <Navbar />
        <div className="content">
          <SinglePage />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
