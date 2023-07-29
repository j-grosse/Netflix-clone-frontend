// UPDATE movie form
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`, movie)
      .then((res) => navigate('/'))
      .catch((e) => setError(e));
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
    <div className="">
      <h1>Update Movie</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={movie?.title || ''} onChange={handleChange} />
        <label htmlFor="director">Director</label>
        <input type="text" name="director" value={movie?.director || ''} onChange={handleChange} />
        <label htmlFor="year">Year</label>
        <input type="text" name="year" value={movie?.year || ''} onChange={handleChange} />
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating" value={movie?.value || ''} onChange={handleChange} />
        <label htmlFor="poster">Poster</label>
        <input type="text" name="poster" value={movie?.poster || ''} onChange={handleChange} />
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" value={movie?.genre || ''} onChange={handleChange} />
        <button> Update Movie </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
