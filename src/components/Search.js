import "../styles/Search.scss";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchUrl } from "../aux/GlobalVariables";
import MovieItem from "./MovieItem";
import useFetchMovies from "../hooks/useFetchMovies";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

const Search = () => {

    const [inputValue, setInputValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({
        query: "",
    })
    const {page, handleClickFirstPage, handleClickPrev, handleClickNext, handleClickLastPage} = usePagination();
    const {movies, totalPages} = useFetchMovies(searchUrl, page, `%&query=${searchParams.get("query")}`);

    console.log(page);
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSearchParams({
          query: inputValue, 
        })
      }

      console.log(`${searchParams.get("query")}`)

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
                <div className="movies-container">
                    {movies.map(movie => <MovieItem 
                    title = {movie.title}
                    img = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    id = {movie.id}
                    key = {movie.id}
                    />)}
                </div>
                }
                <Pagination 
                handleClickFirstPage={handleClickFirstPage}
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}
                handleClickLastPage={handleClickLastPage}
                page={page}
                totalPages={totalPages}
                />
            </div>
        </main>
    )
}

export default Search;