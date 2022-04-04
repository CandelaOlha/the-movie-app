import "../styles/Pagination.scss";
import { MdFirstPage, MdNavigateBefore, MdNavigateNext, MdLastPage } from 'react-icons/md';

const Pagination = ({handleClickFirstPage, handleClickPrev, handleClickNext, handleClickLastPage, page, totalPages}) => {
    return (
        <div className="pagination">
            <button
            onClick={handleClickFirstPage}
            disabled={page === 1}
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
            onClick={() => handleClickLastPage(totalPages > 500 ? 500 : totalPages)}
            disabled={totalPages > 500 ? page === 500 : page == totalPages}
            >
                <MdLastPage />
            </button>
        </div>
    )
}

export default Pagination;