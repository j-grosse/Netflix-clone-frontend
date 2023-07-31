import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import heroImage from '/src/assets/bg.jpg';
import UseFormControl from './UseFormControl';

const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.black',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pt: 0,
          pb: 40,
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="xl">
          <Typography variant="h1" align="center" color="red" paragraph>
            WATCHFLIX
          </Typography>

          <Stack
            sx={{ pt: 4, mb: 5 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <UseFormControl />
            {/* SELECT * from movies WHERE title OR director OR year OR genre LIKE '*' LIMIT 10; */}

            {/* 
                <Button
                  variant="contained"
                  sx={{ borderRadius: '10px', bgcolor: 'primary.main', ':hover': {bgcolor: 'secondary.light'}, }}
                >
                  Add Recipe
                </Button> */}
            {/* <Button variant="outlined">Secondary action</Button> */}
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
