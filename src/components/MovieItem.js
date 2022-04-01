import "../styles/MovieItem.scss";
import { Link } from "react-router-dom";

const MovieItem = ({title, img, id}) => {
    return (
        <Link to={`/movies/${id}`} className="movie-link">
            <figure className="movie-details">
                <img src={img} alt={title} className="movie-img" />
                <figcaption className="movie-name">{title}</figcaption>
            </figure>
        </Link>
    )
}

export default MovieItem;