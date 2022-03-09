import MovieGrid from "./MovieGrid";

const MainView = () => {
    return (
        <section>
            <MovieGrid
            title = "Upcoming Movies"
            category = "upcoming"
            />
            <MovieGrid
            title = "Top rated Movies"
            category = "top_rated"
            />
            <MovieGrid
            title = "Popular Movies"
            category = "popular"
            />
        </section>
    )
}

export default MainView;