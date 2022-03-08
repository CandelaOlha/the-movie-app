import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import PopularMovies from "./components/PopularMovies";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/top-rated-movies" element={<TopRatedMovies />} />
        <Route path="/popular-movies" element={<PopularMovies />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
