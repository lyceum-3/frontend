import { FC, ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    width?: string;
    padding?: string;
    margin?: string;
}

const Card: FC<CardProps> = ({
    children,
    width = "400px",
    padding = "30px",
    margin = "50px auto"
}) => {
    return (
        <div
            style={{
                maxWidth: width,
                margin,
                padding,
                borderRadius: "20px",
                background: "#f9fafb",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
        >
            {children}
        </div>
    );
};

export default Card;
