import { useState, useEffect } from "react";

const useFetchMovies = (baseUrl, category, apiKey) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}${category}?api_key=${apiKey}&page=1`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })
    }, [])

    return movies;
}

export default useFetchMovies;