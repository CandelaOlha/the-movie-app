import MovieGrid from "./MovieGrid";

const MainView = () => {
    return (
        <section>
            <MovieGrid
            title = "Upcoming Movies"
            link = "upcoming-movies"
            category = "upcoming"
            />
            <MovieGrid
            title = "Top rated Movies"
            link = "top-rated-movies"
            category = "top_rated"
            />
            <MovieGrid
            title = "Popular Movies"
            link = "popular-movies"
            category = "popular"
            />
        </section>
    )
}

export default MainView;