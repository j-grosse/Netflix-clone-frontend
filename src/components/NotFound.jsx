
import React from 'react';
// import notFound from '../assets/notFound.jpg';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Page not found</h2>
      {/* <img src={notFound} alt="not found" height="300" /> */}
      <button onClick={() => navigate('/')}>Go Back Home</button>
    </div>
  );
};

export default NotFound;