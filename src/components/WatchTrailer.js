import "../styles/WatchTrailer.scss";
import { GrClose } from 'react-icons/gr';

const WatchTrailer = ({videoKey, handleClickCloseModal}) => {
    return (
        <div className="movie-trailer-modal">
            <button className="close-modal" onClick={handleClickCloseModal}>
                <GrClose aria-label="close-modal" className="icon"/>
            </button>
            <iframe 
            src={`https://www.youtube.com/embed/${videoKey}`} 
            className="video">
            </iframe>
        </div>
    )
}

export default WatchTrailer;