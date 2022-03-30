import "../styles/MovieBanner.scss";
import { Link } from "react-router-dom";
import { FiInfo } from 'react-icons/fi';

const MovieBanner = ({img, title, id}) => {
    
    return (
        <div style={{ backgroundImage: `url(${img})`}} className="banner-img-container">
            <div className="content-container">
                <h3 className="movie-title">{title}</h3>
                <Link to={`/movies/${id}`} className="cta">
                     <FiInfo aria-label="More information" className="cta-icon"/>
                     <p className="cta-text">More information</p>
                </Link>
            </div>
        </div>
    )
}

export default MovieBanner;