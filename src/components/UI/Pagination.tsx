import * as React from "react";
import {useState} from "react";
import PageButton from "./PageButton";

interface Pages {
    pages: string[],
    onButtonClick: (data: number) => void
}

const Pagination : React.FC<Pages> = ({pages, onButtonClick}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (page:number) => {
        setCurrentPage(page);

        onButtonClick(page);
    }

    return (
        <>
            <div className="blog-pagination">
                {pages.map((v, i) => {
                    return (
                        <PageButton
                            key={i}
                            buttonId={i}
                            buttonClass={i === currentPage ? 'selected' : ''}
                            label={(i + 1).toString()}
                            onButtonClick={handlePageChange}
                        ></PageButton>
                    );
                })}
            </div>
        </>
    )
}

export default Pagination;