import "../styles/Pagination.scss";
import { MdFirstPage, MdNavigateBefore, MdNavigateNext, MdLastPage } from 'react-icons/md';

const Pagination = ({handleClickFirstPage, handleClickPrev, handleClickNext, handleClickLastPage, page, totalPages}) => {
    return (
        <div className="pagination">
            <button
            onClick={handleClickFirstPage}
            >
                <MdFirstPage />
            </button>
            <button
            onClick={handleClickPrev}
            disabled={page === 1}
            >
                <MdNavigateBefore />
            </button>
            <button
            onClick={handleClickNext}
            disabled={totalPages > 500 ? page === 500 : page === totalPages}
            >
                <MdNavigateNext />
            </button>
            <button
            onClick={handleClickLastPage}
            >
                <MdLastPage />
            </button>
        </div>
    )
}

export default Pagination;