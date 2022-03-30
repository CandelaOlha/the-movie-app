import "../styles/MoviesSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularMoviesUrl, imgUrl } from "../aux/GlobalVariables";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieBanner from "./MovieBanner";

const MoviesSlider = () => {

  const movies = useFetchMovies(popularMoviesUrl);

  const selectedMovies = movies.slice(0, 5);

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
      {selectedMovies.map(movie => <MovieBanner 
      img = {`${imgUrl}${movie.backdrop_path}`}
      title = {movie.title}
      id = {movie.id}
      key = {movie.id}
      />)}
    </Slider>
  )
}

export default MoviesSlider;