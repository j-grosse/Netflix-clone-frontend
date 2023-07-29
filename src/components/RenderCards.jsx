import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import MovieCard from './MovieCard';

const RenderCards = ({ apiData, setSelectedCard }) => {
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {/* {cards.map((card) => ( */}
          {/* <Grid item key={card} xs={12} sm={6} md={4}> */}
          {apiData  &&
            apiData.map((entry, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MovieCard
                  id={entry.id}
                  title={entry.title}
                  director={entry.director}
                  year={entry.year}
                  rating={entry.rating}
                  poster={entry.poster}
                  genre={entry.genre}
                  setSelectedCard={setSelectedCard}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RenderCards;
