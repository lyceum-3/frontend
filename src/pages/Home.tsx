import * as React from 'react';
import { useNavigate } from "react-router-dom"
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import Subtitle from '../components/UI/Subtitle';

function Home() {
    const nav = useNavigate();

    function getGreetings(): string {
        const hourStr = new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          hour12: false,
          timeZone: 'Europe/Kyiv'
        }).format(new Date());
        const hours = Number(hourStr);

        if (hours >= 6 && hours < 12) return 'Доброго ранку 🌅';
        if (hours >= 12 && hours < 18) return 'Доброго дня ☀️';
        if (hours >= 18 && hours < 24) return 'Доброго вечора 🌙';
        return 'Доброї ночі 💤';
      }

    return (
        <Card>
            <header style={{textAlign: "center", marginBottom: "20px"}}>
                <Title title={getGreetings()}/>
                <Subtitle>Портал Березанського ліцею №3</Subtitle>
            </header>
            <nav>
                <Button text="Розклад" onClick={() => {nav("/schedule")}} />
                <Button text="Адмін панель" onClick={() => {nav("/admin")}} />
                <Button text="Актовий зал" onClick={() => {nav("/events")}} />
            </nav>
        </Card>
    )
}

export default Home;
