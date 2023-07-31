import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import heroImage from '../assets/bg.jpg';
import UseFormControl from './SearchForm';

const Hero = ({ children }) => {
  return (
    <div>
        <Box
          sx={{
            bgcolor: 'background.black',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            pt: 0,
            pb: 50,
            textAlign: 'center',
          }}
        >

          <Stack
            sx={{ pt: 40 }}
            direction="column"
            spacing={6}
            justifyContent="center"
          >
                      <Typography variant="h3" sx={{ textAlign: 'center' }} color="red">
            WATCHFLIX
          </Typography>
            {children}
            {/* <UseFormControl /> */}

            {/* 
                <Button
                  variant="contained"
                  sx={{ borderRadius: '10px', bgcolor: 'primary.main', ':hover': {bgcolor: 'secondary.light'}, }}
                >
                  Add Recipe
                </Button> */}
            {/* <Button variant="outlined">Secondary action</Button> */}
          </Stack>
        </Box>
    </div>
  );
};

export default Hero;
