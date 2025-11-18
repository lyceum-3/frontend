import * as React from 'react';
import { useNavigate } from "react-router-dom"
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";

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
        <Card>
            <Title title={getGreetings()}/>
            <Button text = "Розклад" onClick={() => {nav("/schedule")}} />
            <Button text="Адмін панель" onClick={() => {nav("/login")}} />
        </Card>
    )
}

export default Home;
