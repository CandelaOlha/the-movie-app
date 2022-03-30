import "../styles/PopularMovies.scss";
import SpecificMoviesList from "./SpecificMoviesList";
import { popularMoviesUrl } from "../aux/GlobalVariables";

const PopularMovies = () => {
    return (
        <main className="popular-movies">
            <SpecificMoviesList 
            url = {popularMoviesUrl}
            title = "Popular movies"
            />
        </main>
    )
}

export default PopularMovies;