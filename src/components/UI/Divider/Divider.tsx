import * as React from "react";
import * as styles from "./Divider.module.css";

interface DividerProps {
    label: string;
}

const Divider: React.FC<DividerProps> = ({ label }) => {
    return (
        <div className={styles.divider}>
            <div className={styles.dots}>...</div>
            <span className={styles.label}>{label}</span>
        </div>
    );
};

export default Divider;
