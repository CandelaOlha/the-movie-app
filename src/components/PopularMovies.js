import "../styles/PopularMovies.scss";
import SpecificMoviesList from "./SpecificMoviesList";

const PopularMovies = () => {
    return (
        <main className="popular-movies">
            <SpecificMoviesList 
            category = "popular"
            title = "Popular movies"
            />
        </main>
    )
}

export default PopularMovies;