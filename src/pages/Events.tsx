import * as React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import Label from "../components/UI/Label"
import Title from "../components/UI/Title";
import Button from "../components/UI/Button";
import Subtitle from "../components/UI/Subtitle";
import Paragraph from "../components/UI/Paragraph";
import "./Calendar.css";

interface Event {
    date: string; // yyyy-mm-dd
    title: string;
    time?: string;
    note?: string;
}

interface SubCardProps {
    label: string;
    text?: string;
}

interface EventComponentProps {
    event: Event;
}

const events: Event[] = [
    { date: "2025-11-21", title: "День Гідності та Свободи" },
    { date: "2025-12-01", title: "Ярмарка", note: "Ярмарка на підтримку ЗСУ" },
    { date: "2025-12-05", title: "Дискотека", time: "6-7 уроки", note: "Українське диско" },
];

function Events() {
    const [value, setValue] = React.useState(new Date());

    const nav = useNavigate();

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const SubCardComponent: React.FC<SubCardProps> = ({ label, text }) => {
        return (
            <div>
                <Label label={label} />
                <Paragraph>{text ? text : <i>не встановлено</i>}</Paragraph>
            </div>
        );
    };

    const EventComponent: React.FC<EventComponentProps> = ({ event }) => {
        return (
            <Card margin="20px auto">
                <SubCardComponent label="Назва" text={event.title} />
                <div style={{marginTop: "20px"}} />
                <SubCardComponent label="Час" text={event.time} />
                <div style={{marginTop: "20px"}} />
                <SubCardComponent label="Примітки" text={event.note} />
            </Card>
        );
    };

    const todaysEvents = events.filter(ev => ev.date === formatDate(value));

    return (
        <Card>
            <Title title="Календар подій" />
            <div style={{display: "flex", justifyContent: "center"}}>
                <Calendar
                    value={value}
                    onChange={(date) => setValue(date as Date)}
                    className="custom-calendar"
                />
            </div>
            <div style={{textAlign:"center", marginTop: "30px"}}>
                <Subtitle>Події на {formatDate(value)}</Subtitle>
            </div>
            {todaysEvents.length > 0 ? (
                <div>
                    {todaysEvents.map((ev) => (
                        <EventComponent event={ev} />
                    ))}
                </div>
            ) : (
                <div style={{textAlign: "center"}}>
                    <Paragraph>Подій на цю дату немає 💤</Paragraph>
                </div>
            )}
            <Button text="Home" onClick={() => {nav("/")}} />
        </Card>
    )
}

export default Events;
