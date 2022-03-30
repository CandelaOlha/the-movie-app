import "../styles/TopRatedMovies.scss";
import SpecificMoviesList from "./SpecificMoviesList";
import { topRatedMoviesUrl } from "../aux/GlobalVariables";

const TopRatedMovies = () => {
    return (
        <main className="top-rated-movies">
            <SpecificMoviesList 
            url = {topRatedMoviesUrl}
            title = "Top rated movies"
            />
        </main>
    )
}

export default TopRatedMovies;