import * as React from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents, deleteEvent } from "../../../services/eventsService";
import { Event } from "../../../types/Event";
import { useToast } from "../../../components/UI/Toast";

function EventsView() {
    const [events, setEvents] = React.useState<Event[]>([]);
    const [loading, setLoading] = React.useState(true);

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

    async function handleDelete(id: number) {
        try {
            await deleteEvent(id);
            showToast("Подію видалено успішно!", "success");
            setEvents(events.filter(ev => ev.id !== id));
        } catch (error: unknown) {
            showToast(error instanceof Error ? error.message : String(error), "error");
        }
    }

    const nav = useNavigate();

    return (
        <>
            <header>
                <h1>Hello, CRUD!</h1>
            </header>
            <nav>
                <button onClick={() => nav("/admin")}>Back</button>
            </nav>
            <hr />
            <main>
                {loading ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => nav("/admin/events/add")}>+ Add event</button>
                        {events.length === 0 ? (
                            <p>Поки нічого нема...</p>
                        ) : (
                            <table border={1} cellPadding={8}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Note</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map(ev => (
                                        <tr key={ev.id}>
                                            <td>{ev.date}</td>
                                            <td>{ev.name}</td>
                                            <td>{ev.time}</td>
                                            <td>{ev.note}</td>
                                            <td>
                                                <button onClick={() => nav(`/admin/events/update/${ev.id}`)}>Edit</button>
                                                <button onClick={() => handleDelete(ev.id || -1)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </main>
        </>
    );
};

export default EventsView;
