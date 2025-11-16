import * as React from 'react';
import { useNavigate } from "react-router-dom"
import Button from "../components/UI/Button";

function Home() {
    const nav = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>Вітаю!</h1>
            <Button text="Перейти до розкладу" onClick={() => nav("/schedule")} />
        </div>
    )
}

export default Home;
