import "../styles/MoviesSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieBanner from "./MovieBanner";
import { useState, useEffect } from "react";
import { baseUrl, apiKey, currentPage } from "../aux/GlobalVariables";

const MoviesSlider = () => {

  const [movies, setMovies] = useState([]);

  const category = "top_rated"

  useEffect(() => {
      fetch(`${baseUrl}${category}?${apiKey}${currentPage}1`)
      .then(res => res.json())
      .then(data => {
          setMovies(data.results)
      })
  }, [])

  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {movies.map(movie => <MovieBanner 
      title = {movie.title}
      img = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      key = {movie.id}
      />)}
    </Slider>
  )
}

export default MoviesSlider;