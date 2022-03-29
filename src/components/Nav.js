import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useState } from "react";

const Nav = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClick = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <header className="navbar-header">
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
                <button className={`hamburger-menu ${mobileMenu && "hamburger-menu-closed"}`} onClick={handleClick}>
                    <span className={`line line-one ${mobileMenu && "line-one-closed"}`}></span>
                    <span className={`line line-two ${mobileMenu && "line-two-closed"}`}></span>
                </button>
                <div className={`mobile-menu-container ${mobileMenu && "show-mobile-menu-container"}`}>
                    <ul className="mobile-menu">
                        <li className="mobile-menu-item">
                            <Link to="/upcoming-movies" className="mobile-menu-link">Upcoming</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/top-rated-movies" className="mobile-menu-link">Top rated</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/popular-movies" className="mobile-menu-link">Popular</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/search" className="mobile-menu-link">Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;