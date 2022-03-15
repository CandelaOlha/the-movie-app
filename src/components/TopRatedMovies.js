import "../styles/TopRatedMovies.scss";
import SpecificMoviesList from "./SpecificMoviesList";

const TopRatedMovies = () => {
    return (
        <main className="top-rated-movies">
            <SpecificMoviesList 
            category = "top_rated"
            title = "Top rated movies"
            />
        </main>
    )
}

export default TopRatedMovies;