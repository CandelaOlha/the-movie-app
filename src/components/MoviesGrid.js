import "../styles/MoviesGrid.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../aux/GlobalVariables";
import MovieItem from "./MovieItem";

const MoviesGrid = ({title, link, category}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${category}?api_key=${apiKey}&page=1`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            console.log(data.results)
        })
    }, [])

    return (
        <section className="movies-section">
            <header className="movies-section-header">
                <h2 className="category-name">{title}</h2>
                <Link to={`${link}`} className="category-link">See all</Link>
            </header>
            <div className="movies-container">
                {movies.map(movie => <MovieItem 
                title = {movie.title}
                img = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id = {movie.id}
                key = {movie.id}
                />)}
            </div>
        </section>
    )
}

export default MoviesGrid;