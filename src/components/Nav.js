import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Nav = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClickMobileMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const handleClickUpcoming = () => { // Código repetitivo. Ver si hay alguna forma de hacerlo mejor.
        setMobileMenu(false);
    }

    const handleClickTopRated = () => {
        setMobileMenu(false);
    }

    const handleClickPopular = () => {
        setMobileMenu(false);
    }

    const handleClickSearch = () => {
        setMobileMenu(false);
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
                <button className={`hamburger-menu ${mobileMenu && "hamburger-menu-closed"}`} onClick={handleClickMobileMenu}>
                    <span className={`line line-one ${mobileMenu && "line-one-closed"}`}></span>
                    <span className={`line line-two ${mobileMenu && "line-two-closed"}`}></span>
                </button>
                <MobileMenu 
                mobileMenu = {mobileMenu}
                handleClickUpcoming = {handleClickUpcoming}
                handleClickTopRated = {handleClickTopRated}
                handleClickPopular = {handleClickPopular}
                handleClickSearch = {handleClickSearch}
                />
            </nav>
        </header>
    )
}

export default Nav;