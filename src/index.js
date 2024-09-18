import React from 'react';
import ReactDOM from 'react-dom/client';
import Rating from './Rating';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Rating maxRating={5} />
    
  </React.StrictMode>
);
