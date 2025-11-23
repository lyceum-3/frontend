import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEventById, updateEvent } from "../../../services/eventsService";
import { useToast } from "../../../components/UI/Toast";

function EventsUpdate() {
    const [name, setName] = React.useState<string>("");
    const [date, setDate] = React.useState<string>("");
    const [time, setTime] = React.useState<string>("");
    const [note, setNote] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(true);

    const nav = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { showToast } = useToast();

    React.useEffect(() => {
        if (!id) {
            showToast("Event ID not found", "error");
            nav("/admin/events");
            return;
        }
        fetchEventById(+id)
            .then(event => {
                setName(event.name);
                setDate(event.date);
                setTime(event.time || "");
                setNote(event.note || "");
            })
            .catch(error => {
                showToast(error instanceof Error ? error.message : String(error), "error");
                nav("/admin/events");
            })
            .finally(() => setLoading(false));
    }, [id, nav, showToast]);

    async function handleSubmit() {
        if (!name || !date) {
            showToast("Будь-ласка, вкажіть назву та дату", "error");
            return;
        }
        try {
            await updateEvent(Number(id), { name, date, time, note });
            showToast("Подія змінена успішно!", "success");
            nav("/admin/events");
        } catch (error: unknown) {
            showToast(error instanceof Error ? error.message : String(error), "error");
        }
    }

    return (
        <>
            <header>
                <h1>{`Hello, ${id}!`}</h1>
            </header>
            <nav>
                <button onClick={() => nav("/admin/events/")}>Back</button>
                <button onClick={() => nav("/")}>Home</button>
            </nav>
            <hr />
            <main>
                {loading ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div>
                        <div>
                            <p>Вкажіть назву</p>
                            <input 
                                type={"text"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Вкажіть дату</p>
                            <input 
                                type={"date"}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Вкажіть час</p>
                            <input 
                                type={"time"}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Вкажіть примітки</p>
                            <textarea 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleSubmit}>Змінити</button>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default EventsUpdate;
