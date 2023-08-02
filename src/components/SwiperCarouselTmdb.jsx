import React from 'react';
import MovieCardTmdb from './MovieCardTmdb';
import { Typography } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperCarousel.css';
import Swiper from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

const SwiperCarousel = ({ tmdbMovies, setSelectedCardTmdb }) => {
  const swiper = new Swiper('.swiper', {
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
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  return (
    <>
      {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'8'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper> */}

      <div className="netflix-slider">
        <Typography variant="h3" sx={{ color: 'red', mt: '1rem', ml: '1rem' }}>
          Hits of the Week
          <img
            src="/tmdb-logo.svg"
            width="200px"
            style={{ paddingLeft: '10px', paddingTop: '1rem' }}
          />
        </Typography>
        <div className="swiper">
          <div className="swiper-wrapper" key="1">
            {tmdbMovies &&
              tmdbMovies.results.map((entry, index) => (
                // <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
                <div className="swiper-slide" key={entry.id}>
                  <MovieCardTmdb
                    id={entry.id}
                    title={entry.original_title}
                    director={entry.original_language}
                    year={entry.vote_average}
                    rating={entry.vote_average}
                    poster={`https://image.tmdb.org/t/p/w500${entry.poster_path}`}
                    genre={entry.original_language}
                    setSelectedCardTmdb={setSelectedCardTmdb}
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
              {tmdbMovies &&
              tmdbMovies.results.map((entry, index) => (
                // <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
                <div className="swiper-slide" key={entry.id}>
                  <MovieCard
                    id={entry.id}
                    title={entry.original_title}
                    director={entry.original_language}
                    year={entry.release_date}
                    rating={entry.vote_average}
                    poster={`https://image.tmdb.org/t/p/w500${entry.poster_path}`}
                    genre={entry.media_type}
                    setSelectedCard={setSelectedCard}
                  />
                </div>
                ))}

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SwiperCarousel;
