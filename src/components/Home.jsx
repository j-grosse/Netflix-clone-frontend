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
import SwiperCarouselTmdb from './SwiperCarouselTmdb';

const Home = () => {
  // backend routes here, e.g. /api/movies/1
  const [movies, setMovies] = useState([]); // movies array from backend
  const [tmdbMovies, setTmdbMovies] = useState([]); // movies array from backend
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTmdb, setSelectedCardTmdb] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
    console.log('API data was fetched');

    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${
          import.meta.env.VITE_SOME_KEY
        }`
      )
      .then((res) => setTmdbMovies(res.data))
      .catch((e) => console.log(e));
    console.log('API Tmdb data was fetched');
  }, []);

  return !selectedCard ? (
    // frontend routes here, e.g. /movies/1
    <Box sx={{ minHeight: '100vh' }}>
      <Hero>
        <SearchForm setMovies={setMovies} />
      </Hero>

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

      {/* <RenderCards apiData={movies} setSelectedCard={setSelectedCard} /> */}

      {Array.isArray(tmdbMovies.results) ? (
        <SwiperCarouselTmdb
          tmdbMovies={tmdbMovies}
          setSelectedCardTmdb={setSelectedCardTmdb}
        />
      ) : (
        <Typography
          variant="h2"
          sx={{ color: 'red', mt: '5rem', textAlign: 'center' }}
        >
          no TMDB movies found
          {/* {console.log(tmdbMovies.results)} */}
        </Typography>
      )}
    </Box>
  ) : (
    <Navigate to={`/movies/${selectedCard.id}`} />
  );
};

export default Home;
