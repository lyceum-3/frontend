import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/UI/Button";

function Schedule() {
    const nav = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>Hello, Schedule!</h1>
            <Button text="To home" onClick={() => nav("/")} />
        </div>
    )
}

export default Schedule;
