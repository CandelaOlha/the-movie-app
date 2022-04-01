import "../styles/WatchTrailer.scss";

const WatchTrailer = () => {
    return (
        <div className="movie-trailer-modal">
            <button className="close-modal"></button>
            <iframe 
            width="60%" 
            height="60%" 
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            >
            </iframe>
        </div>
    )
}

export default WatchTrailer;