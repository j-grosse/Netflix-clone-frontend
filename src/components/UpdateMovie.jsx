// UPDATE movie form
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { Container } from 'postcss';
import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovie = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState();

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e.response?.data?.message));
    console.log('API data was fetched');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      movie.title &&
      movie.director &&
      movie.year &&
      movie.rating &&
      movie.poster &&
      movie.genre
    ) {
      axios
        .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`, movie)
        .then((res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Movie was updated',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch((e) => setError(e));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // using controlled inputs - get values into fields before updating
    // const updatedMovie = {...movie};
    // updatedMovie[name] = value;
    // setMovie(updatedMovie)
    // result of the expression is used as the property name (see 'computed property syntax')
    setMovie({ ...movie, [name]: value });

    console.log('change');
  };

  return (
    <div>
      <Box sx={{ marginLeft: '3rem' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '25rem',
            color: 'black',
          }}
        >
          <label style={{ color: 'white' }} htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={movie?.title || ''}
            onChange={handleChange}
          />
          <label style={{ color: 'white' }} htmlFor="director">
            Director
          </label>
          <input
            type="text"
            name="director"
            value={movie?.director || ''}
            onChange={handleChange}
          />
          <label style={{ color: 'white' }} htmlFor="year">
            Year
          </label>
          <input
            type="text"
            name="year"
            value={movie?.year || ''}
            onChange={handleChange}
          />
          <label style={{ color: 'white' }} htmlFor="rating">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            value={movie?.rating || ''}
            onChange={handleChange}
          />
          <label style={{ color: 'white' }} htmlFor="poster">
            Poster
          </label>
          <input
            type="text"
            name="poster"
            value={movie?.poster || ''}
            onChange={handleChange}
          />
          <label style={{ color: 'white' }} htmlFor="genre">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            value={movie?.genre || ''}
            onChange={handleChange}
          />
          <br />
          <Button variant="outlined" onClick={handleSubmit}>
            {' '}
            Update Movie{' '}
          </Button>
          <Button variant="outlined" onClick={() => navigate('/')}>
            {' '}
            Cancel{' '}
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default UpdateMovie;
