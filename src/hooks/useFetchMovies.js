import { useState, useEffect } from "react";

const useFetchMovies = (url, page, searchParams="", navigate="") => {

    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`${url}${page}${searchParams}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
            setTotalPages(data.total_pages)
            if (data.results.length === 0) {
                navigate("/PageNotFound");
            }
        })
    }, [page, searchParams])

    return ({
        movies: movies, 
        totalPages: totalPages
    });
}

export default useFetchMovies;