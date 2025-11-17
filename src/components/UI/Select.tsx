import { FC } from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
}

const Select: FC<Props> = ({ value, onChange, options, placeholder }) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                padding: "12px 20px",
                borderRadius: "10px",
                border: "2px solid #e5e7eb",
                outline: "none",
                fontWeight: "500",
                fontSize: "14px",
                width: "100%",
                cursor: "pointer",
                background: "white",
                transition: "border-color 0.2s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#4f46e5"}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            >
            <option value={""}>{placeholder}</option>
            {options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
    );
};

export default Select;
