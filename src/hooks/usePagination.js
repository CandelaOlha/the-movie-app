import { useState } from "react";

const usePagination = () => {

    const [page, setPage] = useState(1);

    const handleClickFirstPage = () => {
        setPage(1)
      }

    const handleClickPrev = () => {
        setPage(page - 1);
    }

    const handleClickNext = () => {
        setPage(page + 1);
    }

    const handleClickLastPage = (totalPages) => {
        setPage(totalPages)
    }

    return ({
        page: page, 
        handleClickPrev: handleClickPrev, 
        handleClickNext: handleClickNext, 
        handleClickFirstPage: handleClickFirstPage, 
        handleClickLastPage: handleClickLastPage
    })
}

export default usePagination;