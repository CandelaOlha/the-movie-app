import "../styles/MovieDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, apiKey } from "../aux/GlobalVariables";

const MovieDetails = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${params.id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => setMovie(data));
    }, [])

    useEffect(() => {
        fetch(`${baseUrl}${params.id}/credits?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => setCredits(data))
    }, [])

    const getMovieYear = (movie) => {
        return movie.release_date.slice(0, 4);
    }

    const getCast = (cast) => {
        const mainCharacters = cast.slice(0, 4);
        let mainCharactersName = [];
        for (let i = 0; i < mainCharacters.length; i++) {
            mainCharactersName.push(mainCharacters[i].name);
        }
        return mainCharactersName.join(", ");
    }

    const getDirectors = (crew) => {
        const directors = crew.filter(person => person.known_for_department === "Directing")
        let directorsNames = [];
        for (let i = 0; i < directors.length; i++) {
            if (!directorsNames.includes(directors[i].name)) { // Agregué este if porque algunos nombres de directores venían duplicados
                directorsNames.push(directors[i].name);
            }
            
        }
        return directorsNames.join(", ");
    }

    return (
        <main className="specific-movie-details-container">
            <div className="specific-movie-details">
                <div className="movie-image-container">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="movie-image" />
                </div>
                <div className="movie-details-text-container">
                    <h1 className="movie-name">{movie.title}</h1>
                    <p className="movie-description">{movie.overview}</p>
                    <p className="movie-info">{movie.release_date && getMovieYear(movie)} • {movie.genres && movie.genres[0].name} • {movie.runtime} min</p>
                    <div className="crew-info">
                        <p className="cast"><span className="title">Starring:</span> {credits.cast && getCast(credits.cast)}...</p>
                        <p className="directors"><span className="title">Directed by:</span> {credits.crew && getDirectors(credits.crew)}</p>
                    </div>
                    <a href="" className="cta">Watch trailer</a>
                </div>
            </div>
        </main>
    )
}

export default MovieDetails;