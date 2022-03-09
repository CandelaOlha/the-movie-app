import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Nav = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="homepage-link">
                    <img src={logo} alt="The Movie App's logo" />
                    <h1 className="brand-title">The Movie App</h1>
                </Link>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <Link to="/upcoming-movies" className="nav-menu-link">Upcoming</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link to="/top-rated-movies" className="nav-menu-link">Top rated</Link>
                    </li>
                    <li className="nav-menu-item">
                        <Link to="/popular-movies" className="nav-menu-link">Popular</Link>
                    </li>
                </ul>
                <Link to="/search" className="search-button">Search</Link>
            </nav>
        </header>
    )
}

export default Nav;