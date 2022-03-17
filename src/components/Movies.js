import "../styles/Movies.scss";
import MoviesSlider from "./MoviesSlider";
import MainView from "./MainView";

const Movies = () => {
    return (
        <main className="movies">
            <MoviesSlider />
            <MainView />
        </main>
    )
}

export default Movies;