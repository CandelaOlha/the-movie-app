import { useState, useEffect } from "react";

const useFetchMovies = (url, page, searchParams="", navigate="") => {
// excelente este hook!
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${url}${page}${searchParams}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setIsLoading(false);
            if (data?.results?.length === 0) {
                navigate("/PageNotFound");
            }
        })
    }, [page, searchParams])

    return ({
        movies: movies, 
        totalPages: totalPages, 
        isLoading: isLoading,
    });
}

export default useFetchMovies;