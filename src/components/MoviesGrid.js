import "../styles/MoviesGrid.scss";
import { Link } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieItem from "./MovieItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesGrid = ({url, link, title}) => {

    const movies = useFetchMovies(url);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section className="movies-section">
            <header className="movies-section-header">
                <h2 className="category-name">{title}</h2>
                <Link to={`${link}`} className="category-link">See all</Link>
            </header>
            <Slider {...settings}>
                {movies.map(movie => <MovieItem 
                title = {movie.title}
                img = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id = {movie.id}
                key = {movie.id}
                />)}
            </Slider>
        </section>
    )
}

export default MoviesGrid;