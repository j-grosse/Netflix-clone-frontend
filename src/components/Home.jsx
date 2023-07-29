// READ / list all movies
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import RenderCards from './RenderCards';

const Home = () => {
  // backend routes here, e.g. /api/movies/1
  const [movies, setMovies] = useState([]); // movies array from backend
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
    console.log('API data was fetched');
  }, []);

  return !selectedCard ? (
    // frontend routes here, e.g. /movies/1
    <div className="container" style={{ textAlign: 'center' }}>
      <button className="bg-red-500 shadow-lg text-white font-bold m-5 py-2 px-4 rounded">
        sign in
      </button>

      <form action="submit">
        <input type="text" />
        <button className="bg-red-500 shadow-lg text-white font-bold m-5 py-2 px-4 rounded">
          search
        </button>{' '}
      </form>
      {/* <ul>
        {movies &&
          movies.map((movie) => (
            <li className="card w-10" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title} by {movie.director}
              </Link>
            </li>
          ))}
      </ul> */}
      <RenderCards apiData={movies} setSelectedCard={setSelectedCard} />
    </div>
  ) : (
    <Navigate to={`/movies/${selectedCard.id}`} />
  );
};

export default Home;
