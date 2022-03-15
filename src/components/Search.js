import "../styles/Search.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiKey } from "../aux/GlobalVariables";

const Search = () => {

    const [inputValue, setInputValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({
        query: "",
    })

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchParams.get("query")}`)
        .then(res => res.json())
        .then(data => console.log(data.results))
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
            </div>
        </main>
    )
}

export default Search;