import * as React from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../../services/eventsService"

function EventsAdd() {
    const [name, setName] = React.useState<string>("");
    const [date, setDate] = React.useState<string>("");
    const [time, setTime] = React.useState<string>("");
    const [note, setNote] = React.useState<string>("");

    const nav = useNavigate();

    async function handleSubmit() {
        if (!name || !date) {
            alert("Please fill name and date event");
            return;
        }
        try {
            await createEvent({ name, date, time, note });
            alert("Event created!");
            nav("/admin/events");
        } catch (error: unknown) {
            alert(error instanceof Error ? error.message : error);
        }
    }

    return (
        <>
            <header>
                <h1>Hello, add event page!</h1>
            </header>
            <nav>
                <button onClick={() => nav("/")}>Home</button>
                <button onClick={() => nav("/admin/events")}>Back</button>
            </nav>
            <hr />
            <main>
                <div>
                    <p>Введіть назву події</p>
                    <input 
                        type={"text"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <p>Введіть дату</p>
                    <input 
                        type={"date"}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <p>Введіть час</p>
                    <input 
                        type={"time"}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div>
                    <p>Введіть примітки</p>
                    <textarea 
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Підтвердити</button>
            </main>
        </>
    );
};

export default EventsAdd;
