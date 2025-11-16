import * as React from 'react';
import { useNavigate } from "react-router-dom"
import Button from "../components/UI/Button";

function Home() {
    const nav = useNavigate();

    function getGreetings(): string {
        const now = new Date().toLocaleString("en-US", { timeZone: "Europe/Kyiv" });
        const hours = new Date(now).getHours();

        if (hours > 5 && hours <= 12) {
            return "Доброго ранку 🌅";
        } else if (hours >= 12 && hours < 18) {
            return "Доброго дня ☀️";
        } else if (hours >= 18 && hours < 24) {
            return "Доброго вечора 🌙";
        } else {
            return "Доброї ночі 💤";
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>{getGreetings()}</h1>
            <Button text="Перейти до розкладу" onClick={() => nav("/schedule")} />
        </div>
    )
}

export default Home;
