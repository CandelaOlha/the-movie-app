import "../styles/SpecificMoviesList.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../aux/GlobalVariables";
import MovieItem from "./MovieItem";

const SpecificMoviesList = ({category, title}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${category}?api_key=${apiKey}&page=1`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })
    }, [])

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