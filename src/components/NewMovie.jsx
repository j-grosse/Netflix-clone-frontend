// CREATE new movie form
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // let defaultImage = "https://m.media-amazon.com/images/M/MV5BMTgzNjYxOTQzMl5BMl5BanBnXkFtZTgwOTQyMDEwMDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    // {image: image || defaultImage}

    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, {
        title,
        director,
        year,
        rating,
        poster,
        genre,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="">
      <h1>Create Movie</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          onChange={(e) => setDirector(e.target.value)}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          name="rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="poster">Poster</label>
        <input
          type="text"
          name="poster"
          onChange={(e) => setPoster(e.target.value)}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        <button> Add Movie </button>
      </form>
    </div>
  );
};

export default NewMovie;
