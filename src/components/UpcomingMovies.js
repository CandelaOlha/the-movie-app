import "../styles/UpcomingMovies.scss";
import SpecificMoviesList from "./SpecificMoviesList";

const UpcomingMovies = () => {
    return (
        <main className="upcoming-movies">
            <SpecificMoviesList 
            category = "upcoming"
            title = "Upcoming movies"
            />
        </main>
    )
}

export default UpcomingMovies;