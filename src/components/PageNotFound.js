import "../styles/PageNotFound.scss";
import rex from "../images/rex.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <main className="page-not-found">
            <div className="page-not-found-container">
                <div className="image-container">
                    <img src={rex} alt="Rex from Toy Story looking worried about not finding the page"/>
                </div>
                <div className="text-container">
                    <h2 className="main-title">Oops! Page not found.</h2>
                    <p className="description">We couldn't find the page you are looking for.  But don't worry! You can return to the previous page or to the homepage.</p>
                    <Link to="/" className="homepage-link">Go to homepage</Link>
                </div>
            </div>
        </main>
    )
}

export default PageNotFound;