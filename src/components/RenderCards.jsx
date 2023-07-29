import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import MovieCard from './MovieCard';

const RenderCards = ({ apiData, setSelectedCard }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Grid container spacing={2}>
        {apiData &&
          apiData.map((entry, index) => (
            <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
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
  );
};

export default RenderCards;
