import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import UpdateMovie from './UpdateMovie';
import NotFound from './NotFound';
import SignIn from './SignIn';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        {/* <Route path="/movies/:id/update" element={<UpdateMovie />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </main>
  );
};

export default Main;
