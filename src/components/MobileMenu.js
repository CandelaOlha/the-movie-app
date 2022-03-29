import "../styles/MobileMenu.scss";
import { Link } from "react-router-dom";

const MobileMenu = ({mobileMenu, handleClickUpcoming, handleClickTopRated, handleClickPopular, handleClickSearch}) => {
    return (
        <div className={`mobile-menu-container ${mobileMenu && "show-mobile-menu-container"}`}>
            <ul className="mobile-menu">
                <li className="mobile-menu-item">
                    <Link to="/upcoming-movies" className="mobile-menu-link" onClick={handleClickUpcoming}>Upcoming</Link>
                </li>
                <li className="mobile-menu-item">
                    <Link to="/top-rated-movies" className="mobile-menu-link" onClick={handleClickTopRated}>Top rated</Link>
                 </li>
                <li className="mobile-menu-item">
                    <Link to="/popular-movies" className="mobile-menu-link" onClick={handleClickPopular}>Popular</Link>
                </li>
                <li className="mobile-menu-item">
                    <Link to="/search" className="mobile-menu-link" onClick={handleClickSearch}>Search</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;