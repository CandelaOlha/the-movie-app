import "../styles/Pagination.scss";
import { MdFirstPage, MdNavigateBefore, MdNavigateNext, MdLastPage } from 'react-icons/md';

const Pagination = () => {
    return (
        <div className="pagination">
            <button>
                <MdFirstPage />
            </button>
            <button>
                <MdNavigateBefore />
            </button>
            <button>
                <MdNavigateNext />
            </button>
            <button>
                <MdLastPage />
            </button>
        </div>
    )
}

export default Pagination;