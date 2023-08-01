import React from 'react';
import MovieCard from './MovieCard';
import { Typography } from '@mui/material';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperCarousel.css';

const SwiperCarousel = ({ movies, setSelectedCard }) => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return (
    <>
      <div className="netflix-slider">
        <Typography variant="h3" sx={{ color: 'red', mt: '5rem', ml: '1rem' }}>
          Continue Watching
          <img
            src="/postgres.png"
            width="50px"
            style={{ 'padding-left': '0px' }}
          />
          <p style={{ color: 'white', 'font-size': '1.3rem' }}>ElephantSQL</p>
        </Typography>

        <div className="swiper-container swiper">
          <div className="swiper-wrapper" key="1">
            {movies &&
              movies.map((entry, index) => (
                // <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
                <div className="swiper-slide" key={entry.id}>
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
                </div>
              ))}

            {/* <div className="swiper-wrapper">
              <div className="swiper-slide"><img src="img/1.jpg" alt="Movie Title"></div>
              <div className="swiper-slide"><img src="img/2.jpg" alt="Movie Title"></div> 
            </div> */}
            {/* <!-- Add Pagination --> */}
            {/* <!-- <div className="swiper-pagination"></div> --> */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>

        {/* <div className="netflix-slider">
          <Typography variant="h3" sx={{ color: 'red', mt: '5rem' }}>
            Continue Watching
          </Typography>
          <div className="swiper-container swiper">
            <div className="swiper-wrapper" key="2">
              {movies &&
                movies.map((entry, index) => (
                  // <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
                  <div className="swiper-slide" key={entry.id}>
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
                  </div>
                ))} */}
        {/* <!-- Add Pagination --> */}
        {/* <!-- <div className="swiper-pagination"></div> --> */}
        {/* <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div> 
        </div> */}
      </div>
    </>
  );
};

export default SwiperCarousel;
