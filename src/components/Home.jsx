// READ / list all movies
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import RenderCards from './RenderCards';
import UseFormControl from './UseFormControl';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Hero from './Hero';
import SwiperCarousel from './SwiperCarousel';

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
    <>
      <Hero />
      <RenderCards apiData={movies} setSelectedCard={setSelectedCard} />
      <SwiperCarousel movies={movies} setSelectedCard={setSelectedCard} />
      {/* </Container> */}
    </>
  ) : (
    <Navigate to={`/movies/${selectedCard.id}`} />
  );
};

export default Home;
