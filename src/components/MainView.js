import "../styles/MainView.scss";
import MoviesGrid from "./MoviesGrid";
import { upcomingMoviesUrl, topRatedMoviesUrl, popularMoviesUrl } from "../aux/GlobalVariables";

const MainView = () => {
    return (
        <div className="movies-grid-container">
            <MoviesGrid
            url = {upcomingMoviesUrl}
            link = "upcoming-movies"
            title = "Upcoming movies"
            />
            <MoviesGrid
            url = {topRatedMoviesUrl}
            link = "top-rated-movies"
            title = "Top rated movies"
            />
            <MoviesGrid
            url = {popularMoviesUrl}
            link = "popular-movies"
            title = "Popular movies"
            />
        </div>
    )
}

export default MainView;