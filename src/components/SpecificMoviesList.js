import "../styles/SpecificMoviesList.scss";
import MovieItem from "./MovieItem";
import useFetchMovies from "../hooks/useFetchMovies";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

const SpecificMoviesList = ({url, title}) => {

    const {page, handleClickFirstPage, handleClickPrev, handleClickNext, handleClickLastPage} = usePagination();
    const {movies, totalPages} = useFetchMovies(url, page);

    console.log(page)

    return (
        <div className="specific-movies-container">
            <h2 className="section-title">{title}</h2>
            <div className="movies-container">
                {movies.map(movie => <MovieItem 
                title = {movie.title}
                img = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                id = {movie.id}
                key = {movie.id}
                />)}
            </div>
            <Pagination 
            handleClickFirstPage={handleClickFirstPage}
            handleClickPrev={handleClickPrev}
            handleClickNext={handleClickNext}
            handleClickLastPage={handleClickLastPage}
            page={page}
            totalPages={totalPages}
            />
        </div>
    )
}

export default SpecificMoviesList;