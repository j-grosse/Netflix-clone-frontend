// READ / list all movies
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import RenderCards from './RenderCards';
import SearchForm from './SearchForm';
import Container from '@mui/material/Container';
import { Typography, Box } from '@mui/material';
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
    <Box sx={{ minHeight: '100vh' }}>
      <Hero>
        <SearchForm setMovies={setMovies} />
      </Hero>
      {/* <RenderCards apiData={movies} setSelectedCard={setSelectedCard} /> */}
      {Array.isArray(movies) ? (
        <SwiperCarousel movies={movies} setSelectedCard={setSelectedCard} />
      ) : (
        <Typography
          variant="h2"
          sx={{ color: 'red', mt: '5rem', textAlign: 'center' }}
        >
          no movies found
        </Typography>
      )}
    </Box>
  ) : (
    <Navigate to={`/movies/${selectedCard.id}`} />
  );
};

export default Home;
