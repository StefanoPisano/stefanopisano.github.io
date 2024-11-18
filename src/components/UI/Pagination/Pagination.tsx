import * as React from "react";
import {useState} from "react";
import Button from "../Button/Button";
import * as styles from "./Pagination.module.css";

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
            <div className={styles.blogPagination__div}>
                {pages.map((v, i) => {
                    return (
                        <Button
                            key={i}
                            buttonId={i}
                            buttonClass={i === currentPage ? styles.selectedPage__button : ''}
                            label={(i + 1).toString()}
                            onButtonClick={handlePageChange}
                        ></Button>
                    );
                })}
            </div>
        </>
    )
}

export default Pagination;