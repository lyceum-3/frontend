import { FC } from "react";

interface Props {
    value: string,
    type?: string,
    onChange: (value: string) => void,
    placeholder?: string,
}

const Input: FC<Props> = ({ value, type = "text", onChange, placeholder }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
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
                transition: "border-color 0.2s",
                boxSizing: "border-box"
            }}
            onFocus={(e) => e.target.style.borderColor = "#4f46e5"}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
        />
    );
};

export default Input;
