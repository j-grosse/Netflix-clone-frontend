import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles'; // Theme hook

export default function MovieCard({
  id,
  title,
  director,
  year,
  rating,
  poster,
  genre,
  setSelectedCard,
}) {
  const theme = useTheme();

  return (
    <div key={id}>
      <Card
        sx={{
          background: theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '4px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
          bgcolor: 'whitesmoke',
          ':hover': { cursor: 'pointer', transform: 'scale(1.1)', transition: 'background-color 0.5s ease-out', bgcolor: 'lightgrey' },
          height: '100%',
        }}
        onClick={() =>
          setSelectedCard({
            id,
            title,
            director,
            year,
            rating,
            poster,
            genre,
          })
        }
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '140%',
            // pt: '56.25%',
          }}
          image={poster}
        />
        <CardContent sx={{ color: 'white',
              bgcolor: '#111', flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          {/* <Typography gutterBottom variant="h6" component="h2">
            by {director}
          </Typography> */}
        </CardContent>
        {/* <CardActions sx={{
              color: 'red',
              bgcolor: '#111'}}>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#111',
              ':hover': { bgcolor: 'grey' },
            }}
            size="small"
            onClick={() =>
              setSelectedCard({
                id,
                title,
                director,
                year,
                rating,
                poster,
                genre,
              })
            }
          >
            Details
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
