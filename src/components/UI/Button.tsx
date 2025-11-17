import { FC } from  "react";

interface Props {
    text: string;
    onClick?: () => void;
}

const Button: FC<Props> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "12px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                background: "#4f46e5",
                color: "white",
                fontSize: "14px",
                width: "100%",
                transition: "background 0.2s",
                marginTop: "10px"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#4338ca"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#4f46e5"}
        >
            {text}
        </button>
    )
}

export default Button;
