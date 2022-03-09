const MovieItem = ({title, img}) => {
    return (
        <figure className="movie">
            <img src={img} className="movie-img" />
            <figcaption className="movie-name">{title}</figcaption>
        </figure>
    )
}

export default MovieItem;