import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Paragraph: FC<Props> = ({ children }) => {
    return (
        <p 
            style={{
                marginBottom: "14px",
                color: "#6b7280",
                fontSize: "15px",
                lineHeight: "1.4"
            }}
        >
            {children}
        </p>
    );
};

export default Paragraph;
