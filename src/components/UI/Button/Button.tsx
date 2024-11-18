import * as React from "react";
import * as styles from "./Button.module.css";

interface ButtonProps {
    buttonId: number,
    label: string,
    buttonClass: string,
    onButtonClick: (data: number) => void
}

const Button : React.FC<ButtonProps> = ({buttonId, label, buttonClass, onButtonClick}) => {

    const handleButtonClick = (id : number) => onButtonClick(id);

    return (
        <>
            <button key={buttonId} className={`${styles.button} ${buttonClass}`}
                onClick={() => handleButtonClick(buttonId)}>
                {label}
            </button>
        </>
    )
}

export default Button;