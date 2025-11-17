import { FC } from 'react';

interface Props {
    title: string;
}

const Title: FC<Props> = ({ title }) => {
    return (
        <h2 style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1f2937",
            fontSize: "24px"
        }}>
            {title}
        </h2>
    )
}

export default Title;
