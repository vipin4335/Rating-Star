import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Rating from './Rating';
// import './index.css';
// import App from './App';
function Test(){
  const [moviesRating,setMoviesRating]=useState(0);
  return <div>
    
      <Rating maxRating={10} color={"blue"}  onSetMoviesRating={setMoviesRating}/>
      <p>Rating:{moviesRating}</p>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Rating maxRating={5} />
    <Rating maxRating={5} size={25} color ={"red"}
    message={["terrible","bad","okay","good","Amazing"]} defaultRating={3}/>
    <Test/>
  </React.StrictMode>
);
