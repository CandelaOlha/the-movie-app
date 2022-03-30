import "../styles/SpecificMoviesList.scss";
import useFetchMovies from "../hooks/useFetchMovies";
import { baseUrl, apiKey } from "../aux/GlobalVariables";
import MovieItem from "./MovieItem";

const SpecificMoviesList = ({category, title}) => {

    const movies = useFetchMovies(baseUrl, category, apiKey);

    return (
        <div className="specific-movies-container">
            <h2 className="section-title">{title}</h2>
            <div className="movies-container">
                {movies.map(movie => <MovieItem 
                title = {movie.title}
                img = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id = {movie.id}
                key = {movie.id}
                />)}
            </div>
        </div>
    )
}

export default SpecificMoviesList;