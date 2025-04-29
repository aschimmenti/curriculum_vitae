import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './custom-styles.css'; // Custom styles to override defaults

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);