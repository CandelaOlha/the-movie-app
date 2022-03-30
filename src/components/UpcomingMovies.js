import "../styles/UpcomingMovies.scss";
import SpecificMoviesList from "./SpecificMoviesList";
import { upcomingMoviesUrl } from "../aux/GlobalVariables";

const UpcomingMovies = () => {
    return (
        <main className="upcoming-movies">
            <SpecificMoviesList 
            url = {upcomingMoviesUrl}
            title = "Upcoming movies"
            />
        </main>
    )
}

export default UpcomingMovies;