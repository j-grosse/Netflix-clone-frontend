// CREATE new movie form
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box, Button, Card } from '@mui/material';
import Typography from '@mui/material/Typography';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import defaultPoster from '/src/assets/defaultPoster.jpg';
import { useTheme } from '@mui/material/styles'; // Theme hook

const NewMovie = () => {
  const theme = useTheme();
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
    <>
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
          <div
            className="container m-5"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {/* <h1>Create Movie</h1>*/}
            <Card
              sx={{
                background: theme.palette.background.paper,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                bgcolor: 'whitesmoke',
                ':hover': { bgcolor: 'white' },
                height: '100%',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    width: '25rem',
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  New Movie
                </Typography>

                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    //   pt: '56.25%',
                    pt: '140%',
                  }}
                  image={defaultPoster}
                />
              </CardContent>
            </Card>

            <Box sx={{ marginLeft: '3rem' }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  color: 'black',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '25rem',
                  margin: '0 auto',
                }}
              >
                <label style={{ color: 'white' }} htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label style={{ color: 'white' }} htmlFor="director">Director</label>
                <input
                  type="text"
                  name="director"
                  onChange={(e) => setDirector(e.target.value)}
                />
                <label style={{ color: 'white' }} htmlFor="year">Year</label>
                <input
                  type="text"
                  name="year"
                  onChange={(e) => setYear(e.target.value)}
                />
                <label style={{ color: 'white' }} htmlFor="rating">Rating</label>
                <input
                  type="text"
                  name="rating"
                  onChange={(e) => setRating(e.target.value)}
                />
                <label style={{ color: 'white' }} htmlFor="poster">Poster</label>
                <input
                  type="text"
                  name="poster"
                  onChange={(e) => setPoster(e.target.value)}
                />
                <label style={{ color: 'white' }} htmlFor="genre">Genre</label>
                <input
                  type="text"
                  name="genre"
                  onChange={(e) => setGenre(e.target.value)}
                />
                <br />
                <Button variant="outlined" onClick={handleSubmit}>
                  Add Movie
                </Button>
                <Button variant="outlined" onClick={() => navigate('/')}>
                  Cancel
                </Button>
              </form>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default NewMovie;
