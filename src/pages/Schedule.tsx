import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

function Schedule() {
    const nav = useNavigate();

    return (
        <Card>
            <h2 style={{
                textAlign: "center",
                marginBottom: "30px",
                color: "#1f2937",
                fontSize: "24px"
            }}>
                Hello, schedule!
            </h2>
            <Button text="To home" onClick={() => nav("/")} />
        </Card>
    )
}

export default Schedule;
