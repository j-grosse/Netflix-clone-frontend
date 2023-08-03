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
import { Box, ButtonGroup } from '@mui/material';
import UpdateMovie from './UpdateMovie';
import Container from '@mui/material/Container';
import Swal from 'sweetalert2';

const MovieDetails = () => {
  const theme = useTheme();

  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null); // movies array from backend
  const [comments, setComments] = useState(null);
  const [showUpdate, setShowUpdate] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e.response?.data?.message));
    console.log('axios: movies fetched');

    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/comments/${id}`)
      .then((res) => setComments(res.data))
      .catch((e) => console.log(e.response?.data?.message));
    console.log('axios: comments fetched');
  }, []);

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Movie was deleted',
              showConfirmButton: false,
              timer: 1500,
            });
            setComments(null);
            navigate('/');
          }
        });
      })
      .catch((e) => setError(e.response?.data?.message));
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            margin: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            color: 'white',
          }}
        >
          {movie && (
            <div
              className="container m-5"
              style={{ display: 'flex', justifyContent: 'center' }}
            >

              <Card
                sx={{
                  background: theme.palette.background.paper,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '4px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                  // bgcolor: 'whitesmoke',
                  bgcolor: 'black',
                  color: 'whitesmoke',
                  // ':hover': { bgcolor: 'black' },
                  width: '35rem',
                  height: '100%',
                }}
              >
                <h2 className="text-4xl py-5 font-bold">{movie.title}</h2>

                <CardContent sx={{ flexGrow: 1 }}>
                  {/* <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{
                      width: '25rem',
                      flexGrow: 1,
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    {movie.title}
                  </Typography> */}

                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      //   pt: '56.25%',
                      pt: '140%',
                    }}
                    image={movie.poster}
                  />

                  <p className="text-lg font-bold p-2">
                    <p>Director: {movie.director}</p>
                    <p>Year: {movie.year}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Genre: {movie.genre}</p>
                    {comments ? (
                      <>
                        <br />
                        {comments ? <p>Comments:</p> : <p>No Comments:</p>}
                        <cite>{comments.comment}</cite>
                        <p>
                          {comments.author} (
                          {new Date(comments.datetime).toLocaleDateString()})
                        </p>
                        <br />
                        {console.log(comments)}
                      </>
                    ) : null}
                  </p>
                </CardContent>

                <CardActions>
                  <ButtonGroup aria-label="outlined primary button group">
                    <Button
                      variant="outlined"
                      sx={{
                        color: 'primary.main',
                        bgcolor: 'black',
                        ':hover': { bgcolor: 'grey' },
                      }}
                      size="large"
                      onClick={() => setShowUpdate(true)}
                    >
                      Update Movie
                      {/* <Link to={`/movies/${id}/update`}>Update Movie</Link> */}
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: 'primary.main',
                        bgcolor: 'black',
                        ':hover': { bgcolor: 'grey' },
                      }}
                      size="large"
                      onClick={handleDelete}
                    >
                      Delete Movie
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: 'primary.main',
                        bgcolor: 'black',
                        ':hover': { bgcolor: 'grey' },
                      }}
                      size="large"
                      onClick={() => navigate('/movies/new')}
                    >
                      Add New Movie
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </Card>
              {showUpdate && <UpdateMovie />}
            </div>
          )}
        </Box>
      </Container>
    </>
  );
};

export default MovieDetails;
