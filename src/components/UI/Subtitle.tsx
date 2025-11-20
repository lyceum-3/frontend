import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Subtitle: FC<Props> = ({ children }) => {
    return (
        <h3
            style={{
                marginTop: "10px",
                marginBottom: "12px",
                color: "#4b5563",
                fontSize: "18px",
                fontWeight: "600"
            }}
        >
            {children}
        </h3>
    );
};

export default Subtitle;
