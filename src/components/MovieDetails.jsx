// list a movie
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles'; // Theme hook

const MovieDetails = () => {
  const theme = useTheme();

  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null); // movies array from backend

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e.response?.data?.message));
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => navigate('/'))
      .catch((e) => setError(e.response?.data?.message));
  };

  return (
    <>
      <div className="container" style={{ textAlign: 'center' }}>
        <Card
          sx={{
            background: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
            bgcolor: 'whitesmoke',
            ':hover': { bgcolor: 'white' },
            height: '100%',
          }}
        >
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {movie && (
            <>
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                {movie.title}
              </Typography>
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image={movie.poster}
              />
              <p>Director: {movie.director}</p>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}</p>

              <p>Genre: {movie.genre}</p>
              <button className="bg-red-500 shadow-lg text-white font-bold m-5 py-2 px-4 rounded">
                <Link to={`/movies/${id}/update`}>Update Movie</Link>
              </button>
              <button
                className="bg-red-500 shadow-lg text-white font-bold m-5 py-2 px-4 rounded"
                onClick={handleDelete}
              >
                Delete Movie
              </button>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default MovieDetails;
