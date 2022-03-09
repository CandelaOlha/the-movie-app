import "../styles/MainView.scss";
import MoviesGrid from "./MoviesGrid";

const MainView = () => {
    return (
        <div className="movies-grid-container">
            <MoviesGrid
            title = "Upcoming Movies"
            link = "upcoming-movies"
            category = "upcoming"
            />
            <MoviesGrid
            title = "Top rated Movies"
            link = "top-rated-movies"
            category = "top_rated"
            />
            <MoviesGrid
            title = "Popular Movies"
            link = "popular-movies"
            category = "popular"
            />
        </div>
    )
}

export default MainView;