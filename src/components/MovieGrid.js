import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieGrid = ({title, link, category}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=9ac7847f0996d2c7efc0e9637bf8fd35&page=1`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className="movie-grid">
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default MovieGrid;