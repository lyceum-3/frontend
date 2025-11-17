import { FC } from 'react';

interface Props {
    label: string;
}

const Label: FC<Props> = ({ label }) => {
    return (
        <label style = {{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
            fontSize: "14px"
        }}
       >
            {label}
        </label>
    )
}

export default Label;
