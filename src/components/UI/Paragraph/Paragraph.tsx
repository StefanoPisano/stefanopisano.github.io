import * as React from "react";
import * as styles from "./Paragraph.module.css";

interface ParagraphProps {
    children : React.ReactNode,
    paragraphClass?: string
}

const Paragraph : React.FC<ParagraphProps> = ({paragraphClass = styles.paragraph, children}) => {
    return (
        <>
            <p className={paragraphClass}>
                {children}
            </p>
        </>
    )
}

export default Paragraph;