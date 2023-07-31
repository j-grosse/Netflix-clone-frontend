import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './components/ColorTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  const defaultTheme = theme;
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const uri = 'https://netflix-clone-j0ms.onrender.com/api/movies';

  async function getMovies() {
    try {
      const response = await axios.get(uri);
      // console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Container
        maxWidth={false}
        style={{ margin: 0, padding: 0, height: '100%' }}
        className="bg-black"
      >
        <Header />
        <Main /> {/* shows routed page components */}
        <Footer description="" title="" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
