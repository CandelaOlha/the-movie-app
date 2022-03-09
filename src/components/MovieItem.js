import "../styles/MovieItem.scss";
import { Link } from "react-router-dom";

const MovieItem = ({title, img}) => {
    return (
        <Link to="/" className="movie-link">
            <figure className="movie-details">
                <img src={img} className="movie-img" />
                <figcaption className="movie-name">{title}</figcaption>
            </figure>
        </Link>
    )
}

export default MovieItem;