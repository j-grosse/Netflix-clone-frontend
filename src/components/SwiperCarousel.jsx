import React from 'react';
import MovieCard from './MovieCard';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperCarousel.css';

const SwiperCarousel = ({ movies, setSelectedCard }) => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
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
        <h2>Popular on Netflix</h2>
        <div className="swiper-container swiper">
          <div className="swiper-wrapper">
            {movies &&
              movies.map((entry, index) => (
                // <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
                <>
                  <div className="swiper-slide">
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
                </>
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
        <h2>Continue watching...</h2>
        <div className="swiper-container swiper">
          <div className="swiper-wrapper">
            {/* <div className="swiper-slide"><img src="img/1.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/2.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/3.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/4.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/5.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/6.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/7.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/8.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/9.jpg" alt="Movie Title"></div>
        <div className="swiper-slide"><img src="img/10.jpg" alt="Movie Title"></div>
      </div> */}
        {/* <!-- Add Pagination --> */}
        {/* <!-- <div className="swiper-pagination"></div> --> */}
        {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div> */}
      </div>
    </>
  );
};

export default SwiperCarousel;
