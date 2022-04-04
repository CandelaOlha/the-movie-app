import { useState, useEffect } from "react";

const useFetchMovies = (url, page) => {

    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        fetch(`${url}${page}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            setTotalPages(data.total_pages)
        })
    }, [page])

    return ({
        movies: movies, 
        totalPages: totalPages
    });
}

export default useFetchMovies;