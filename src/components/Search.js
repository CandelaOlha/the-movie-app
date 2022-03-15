import "../styles/Search.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiKey } from "../aux/GlobalVariables";
import MovieItem from "./MovieItem";

const Search = () => {

    const [inputValue, setInputValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({
        query: "",
    })

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchParams.get("query")}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }, [searchParams])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSearchParams({
          query: inputValue, 
        })
      }

    return (
        <main className="search-section">
            <div className="search-section-content-container">
                <form className="search-form" onSubmit={handleSubmit}>
                    <label className="search-label">Search a movie
                        <input 
                        type="text" 
                        placeholder="Type a title..." 
                        value={inputValue}
                        onChange={handleChange} 
                        className="search-input"
                        >
                        </input>
                    </label>
                    <input type="submit" value="Search" className="search-button"></input>
                </form>
                {movies && 
                <div className="search-results">
                    <h2 className="search-results-title">Based on your search: <span className="searched-title">{inputValue}</span></h2>
                    <div className="movies-container">
                        {movies.map(movie => <MovieItem 
                        title = {movie.title}
                        img = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        id = {movie.id}
                        key = {movie.id}
                        />)}
                    </div>
                </div>
                }
            </div>
        </main>
    )
}

export default Search;