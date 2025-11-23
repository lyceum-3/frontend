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
import { Event } from "../types/Event";
import "./Calendar.css";
import { fetchEvents } from "../services/eventsService";
import { useToast } from "../components/UI/Toast";

interface SubCardProps {
    label: string;
    text?: string;
}

interface EventComponentProps {
    event: Event;
}

function Events() {
    const [value, setValue] = React.useState(new Date());
    const [events, setEvents] = React.useState<Event[]>([]);
    const [loading, setLoading] = React.useState(true);

    const nav = useNavigate();
    const hasFetched = React.useRef(false);
    const { showToast } = useToast();

    React.useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetchEvents()
            .then(fetched => setEvents(fetched))
            .catch(error => showToast(error instanceof Error ? error.message : error, "error"))
            .finally(() => setLoading(false));
    }, [showToast]);

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
                <SubCardComponent label="Назва" text={event.name} />
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
            <header style={{textAlign: "center"}}>
                <Title title="Календар подій" />
                <Paragraph>Список подій Березанського ліцею №3</Paragraph>
            </header>
            <main>
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
                {loading ? (
                    <div style={{textAlign: "center"}}>
                        <Paragraph>Завантаження...</Paragraph>
                    </div>
                ) : todaysEvents.length > 0 ? (
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
            </main>
            <nav>
                <Button text="Home" onClick={() => {nav("/")}} />
            </nav>
        </Card>
    )
}

export default Events;
