import * as React from "react";
import * as styles from "./Divider.module.css";

interface DividerProps {
    label: string;
}

const Divider: React.FC<DividerProps> = ({ label }) => {
    return (
        <div className={styles.divider__div}>
            <div className={styles.dots__dov}>...</div>
            <span className={styles.label__span}>{label}</span>
        </div>
    );
};

export default Divider;
