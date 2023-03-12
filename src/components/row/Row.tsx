import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

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
  const [trailer, setTrailer] = useState<string>("");
  const [transition, setTransition] = useState<boolean>(false);

  const handleFetch = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    axios
      .get(`https://api.themoviedb.org/3${fetchUrl}&page=${randomNumber}`)
      .then((res) => setMovieData(res.data.results));
  };

  // search trailer if avaliable
  const handleTrailer = (movie: MovieResultTypes) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then((url: string) => {
          const urlParams: any = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((err: any) => {
          alert("trailer not avaliable");
        });
    }
  };

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
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
          slidesPerView={className === "Row" ? 2.2 : 2.5}
          breakpoints={{
            480: {
              width: 480,
              slidesPerView: className === "Row" ? 3.4 : 2.8,
            },
            768: {
              width: 768,
              slidesPerView: className === "Row" ? 4.4 : 2.8,
            },
            1024: {
              width: 1024,
              slidesPerView: className === "Row" ? 6.1 : 5.8,
            },
          }}
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
                      onClick={() => handleTrailer(movie)}
                      src={
                        `https://image.tmdb.org/t/p/original/${movie?.poster_path}` ||
                        `${notFound}`
                      }
                    />
                  ) : (
                    <img
                      onClick={() => handleTrailer(movie)}
                      src={
                        `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` ||
                        `${notFound}`
                      }
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          {trailer && <YouTube videoId={trailer} opts={opts} style={{padding: '0 2rem'}} />}
        </Swiper>
      </div>
    </section>
  );
};

export default Row;
