import "../styles/MovieDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, apiKey } from "../aux/GlobalVariables";

const MovieDetails = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${params.id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => setMovie(data));
    }, [])

    console.log(movie)

    const getMovieYear = (movie) => {
        return movie.release_date.slice(0, 4);
    }

    return (
        <main className="movie-details">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className="movie-details-text-container">
                <h1 className="movie-name">{movie.title}</h1>
                <p className="movie-description">{movie.overview}</p>
                <p className="movie-info">{getMovieYear(movie)} • {movie.genres[0].name}</p>
                <button className="cta">Watch trailer</button>
            </div>
        </main>
    )
}

export default MovieDetails;