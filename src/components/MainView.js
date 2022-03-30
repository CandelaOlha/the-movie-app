import "../styles/MainView.scss";
import MoviesGrid from "./MoviesGrid";
import { upcomingMoviesUrl, topRatedMoviesUrl, popularMoviesUrl } from "../aux/GlobalVariables";

const MainView = () => {
    return (
        <div className="movies-grid-container">
            <MoviesGrid
            url = {upcomingMoviesUrl}
            link = "upcoming-movies"
            title = "Upcoming Movies"
            />
            <MoviesGrid
            url = {topRatedMoviesUrl}
            link = "top-rated-movies"
            title = "Top rated Movies"
            />
            <MoviesGrid
            url = {popularMoviesUrl}
            link = "popular-movies"
            title = "Popular Movies"
            />
        </div>
    )
}

export default MainView;