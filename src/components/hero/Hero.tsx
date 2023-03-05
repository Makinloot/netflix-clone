import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../requests";

import Button from "../button/Button";

// types
import { MovieResultTypes } from "../../types";

// media & styles
import "./Hero.scss";

const Hero = () => {

  const [movie, setMovie] = useState<MovieResultTypes | null>(null)
  
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20)
    axios.get(`https://api.themoviedb.org/3${requests.netflixOriginals}`).then(res => {
      console.log(res.data)
      setMovie(res.data.results[randomNumber])
    })
  }, [])

  return (
    <section className="Hero flex-col" style={{background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
      <h2 className="Hero-heading">{movie?.name}</h2>
      <div className="Hero-buttons flex-row">
        <Button value="play" className="btn-dark" />
        <Button value="my list" className="btn-dark"/>
      </div>
      <p className="Hero-description">{movie?.overview}</p>
      <div className="Hero-blur"></div>
    </section>
  );
};

export default Hero;
