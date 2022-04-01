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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
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
            <Slider {...settings} className="secondary-slider">
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