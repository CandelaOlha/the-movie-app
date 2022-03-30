import { useState, useEffect } from "react";

const useFetchMovies = (url) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${url}1`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })
    }, [])

    return movies;
}

export default useFetchMovies;