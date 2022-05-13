import "../styles/MovieDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, apiKey } from "../aux/GlobalVariables";
import WatchTrailer from "./WatchTrailer";

const MovieDetails = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [credits, setCredits] = useState([]);
    const [videoKey, setVideoKey] = useState([]);
    const [watchTrailer, setWatchTrailer] = useState(false);

    // los fetch podrian estar los tres dentro del mismo use useEffect, no hacen falta tres
    useEffect(() => {
        fetch(`${baseUrl}${params.id}?${apiKey}`)
        .then(res => res.json())
        .then(data => setMovie(data));
    }, [])

    useEffect(() => {
        fetch(`${baseUrl}${params.id}/credits?${apiKey}`)
        .then(res => res.json())
        .then(data => setCredits(data))
    }, [])

    useEffect(() => {
        fetch(`${baseUrl}${params.id}/videos?${apiKey}`)
        .then(res => res.json())
        .then(data => setVideoKey(data.results[0].key))
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
        // perfecta esta funcion, muchisima atencion al etalle!
        if (directorsNames.join(", ") !== "") {
            return directorsNames.join(", ");
        }
        else {
            return "-";
        }
    }

    const handleClickOpenModal = () => {
        setWatchTrailer(true);
    }

    const handleClickCloseModal = () => {
        setWatchTrailer(false);
    }

    return (
        <main className="specific-movie-details-container">
            <div className="specific-movie-details">
                <div className="movie-image-container">
                {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title}`} 
                className="movie-image" 
                />}
                </div>
                <div className="movie-details-text-container">
                    <h1 className="movie-name">{movie.title}</h1>
                    <p className="movie-description">{movie.overview}</p>
                    <p className="movie-info">
                        {movie.release_date && getMovieYear(movie)} • {movie.genres && movie.genres[0].name} • {movie.runtime} min
                    </p>
                    <div className="crew-info">
                        <p className="cast">
                            <span className="title">Starring: </span> 
                            {credits.cast && getCast(credits.cast)}...
                        </p>
                        <p className="directors">
                            <span className="title">Directed by: </span> 
                            {credits.crew && getDirectors(credits.crew)}
                        </p>
                    </div>
                    <button className="cta" onClick={handleClickOpenModal}>Watch trailer</button>
                </div>
            </div>
            {watchTrailer && <WatchTrailer 
            videoKey = {videoKey}
            handleClickCloseModal = {handleClickCloseModal}
            />}
        </main>
    )
}

export default MovieDetails;