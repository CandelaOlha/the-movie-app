import { useState, useEffect } from "react";

const useFetchMovies = (url, page, searchParams) => {

    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`${url}${page}${searchParams}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            setTotalPages(data.total_pages)
        })
    }, [page, searchParams])

    return ({
        movies: movies, 
        totalPages: totalPages
    });
}

export default useFetchMovies;