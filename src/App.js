import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import PopularMovies from "./components/PopularMovies";
import Search from "./components/Search";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/top-rated-movies" element={<TopRatedMovies />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
