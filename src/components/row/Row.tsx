import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import axios from "axios";

import notFound from "../../assets/not-found.png";

// types
import { MovieResultTypes } from "../../types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Row.scss";

const Row: React.FC<{
  heading: string;
  className: string;
  fetchUrl: string;
}> = ({ heading, className, fetchUrl }) => {
  const [movieData, setMovieData] = useState<MovieResultTypes[] | null>(null);
  const [transition, setTransition] = useState<boolean>(false);

  const handleFetch = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    axios.get(`https://api.themoviedb.org/3${fetchUrl}&page=${randomNumber}`).then(res => setMovieData(res.data.results))
  };

  useEffect(() => {
    handleFetch();
    setTimeout(() => {
      setTransition(true);
    }, 2000);
  }, []);

  return (
    <section className={className}>
      <h3>{heading}</h3>
      <div className="Row-items">
        <Swiper
          slidesPerView={className === "Row" ? 7.4 : 9.8}
          spaceBetween={10}
          freeMode
          navigation
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {movieData &&
            movieData.map((movie) => (
              <SwiperSlide
                className={transition ? "slide-swiper active" : "slide-swiper"}
                key={movie.id}
              >
                <div className="slide">
                  {className === "Row" ? (
                    <img
                      src={
                        `https://image.tmdb.org/t/p/original/${movie?.poster_path}` ||
                        `${notFound}`
                      }
                    />
                  ) : (
                    <img
                      src={
                        `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` ||
                        `${notFound}`
                      }
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Row;
