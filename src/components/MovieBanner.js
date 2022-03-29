import "../styles/MovieBanner.scss";

const MovieBanner = ({img, title}) => {
    return (
        <div className="img-container">
            <img src={img} alt={title}/>
        </div>
    )
}

export default MovieBanner;