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
      <div className="bg-black">
        <Header />
        <Main /> {/* shows routed page components */}
        <Footer description="" title="" />
      </div>
    </ThemeProvider>
  );
}

export default App;
