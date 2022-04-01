import "../styles/HamburgerMenu.scss";

const HamburgerMenu = ({mobileMenu, handleClickMobileMenu}) => {
    return (
        <button 
        className={`hamburger-menu ${mobileMenu && "hamburger-menu-closed"}`} 
        onClick={handleClickMobileMenu}>
            <span className={`line line-one ${mobileMenu && "line-one-closed"}`}></span>
            <span className={`line line-two ${mobileMenu && "line-two-closed"}`}></span>
        </button>
    )
}

export default HamburgerMenu;