import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import DetailedProfile from './pages/DetailedProfile';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import './styles.css';

// AnimationWrapper component to handle route transitions
const AnimationWrapper = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/publications" element={
          <PageTransition>
            <Publications />
          </PageTransition>
        } />
        <Route path="/profile" element={
          <PageTransition>
            <DetailedProfile />
          </PageTransition>
        } />
        {/* Add a redirect for the curriculum_vitae path to home */}
        <Route path="/curriculum_vitae" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Get the basename from PUBLIC_URL for proper routing in both development and production
  const basename = process.env.PUBLIC_URL || '';

  return (
    <Router basename={basename}>
      <div className="app">
        <Navbar />
        <div className="content">
          <AnimationWrapper />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
