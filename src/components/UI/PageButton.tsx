import * as React from "react";

interface PageButtonProps {
    buttonId: number,
    label: string,
    buttonClass: string,
    onButtonClick: (data: number) => void
}

const PageButton : React.FC<PageButtonProps> = ({buttonId, label, buttonClass, onButtonClick}) => {

    const handleButtonClick = (id : number) => onButtonClick(id);

    return (
        <>
            <button key={buttonId} className={buttonClass}
                onClick={() => handleButtonClick(buttonId)}>
                {label}
            </button>
        </>
    )
}

export default PageButton;