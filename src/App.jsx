import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const uri = 'https://netflix-clone-j0ms.onrender.com/api/movies';

  async function getMovies() {
    try {
      const response = await axios.get(uri);
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }

useEffect( () => {
getMovies();
}),[]; 



  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-black to-red-500">
        <h1 className="text-3xl font-bold">NETFLIX</h1>
        <button className="bg-red-500 shadow-lg text-white font-bold m-5 py-2 px-4 rounded">
          sign in
        </button>
        <button className="bg-red-500 shadow-lg text-white font-bold m-5 py-2 px-4 rounded">
          search
        </button>
        <form action="submit"><input type="text" />search</form>
      </div>
    </>
  );
}

export default App;
