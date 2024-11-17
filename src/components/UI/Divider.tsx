import * as React from "react";

interface DividerProps {
    label: string;
}

const Divider: React.FC<DividerProps> = ({ label }) => {
    return (
        <div className="divider">
            <div style={{ textAlign: "center", fontSize: "2em", letterSpacing: "30px", margin: "50px 0" }}>...</div>
            <span className="label">{label}</span>
        </div>
    );
};

export default Divider;
