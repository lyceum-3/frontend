import * as React from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents, deleteEvent } from "../../../services/eventsService";
import { Event } from "../../../types/Event";
import { useToast } from "../../../components/UI/Toast";
import Card from "../../../components/UI/Card";
import Title from "../../../components/UI/Title";
import Button from "../../../components/UI/Button";
import Paragraph from "../../../components/UI/Paragraph";

interface EventRowProps {
    event: Event;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
};

const EventRow: React.FC<EventRowProps> = ({ event, onEdit, onDelete }) => {
    return (
        <tr key={event.id}>
            <td style={{ padding: "6px 6px" }}>{event.date}</td>
            <td style={{ padding: "6px 6px" }}>{event.name}</td>
            <td style={{ padding: "6px 6px" }}>{event.time}</td>
            <td style={{ padding: "6px 6px" }}>{event.note}</td>
            <td style={{ padding: "6px 6px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                    <button
                        style={{ padding: "8px 12px", border: "1px solid #4f46e5", borderRadius: "8px", background: "white", color: "#4f46e5", cursor: "pointer" }}
                        onClick={() => onEdit(event.id || -1)}
                    >
                        Редагувати
                    </button>
                    <button
                        style={{ padding: "8px 12px", border: "1px solid #4f46e5", borderRadius: "8px", background: "white", color: "#4f46e5", cursor: "pointer" }}
                        onClick={() => onDelete(event.id || -1)}
                    >
                        Видалити
                    </button>
                    
                </div>
            </td>
        </tr>        
    );
};

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
        if (id === -1) {
            showToast("Помилка: Недійсний ID події", "error");
            return;
        }
        try {
            await deleteEvent(id);
            showToast("Подію видалено успішно!", "success");
            setEvents(events.filter(ev => ev.id !== id));
        } catch (error: unknown) {
            showToast(error instanceof Error ? error.message : String(error), "error");
        }
    }

    const handleEdit = (id: number) => {
        nav(`/admin/events/update/${id}`);
    }

    const handleAdd = () => {
        nav("/admin/events/add");
    }

    const nav = useNavigate();

    return (
        <Card margin="20px auto" width="90%" padding="20px">
            <header>
                <Title title="Управління подіями" />
                <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "15px 0" }} />
            </header>
            <nav style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                <Button text="Назад до адмінки" onClick={() => nav("/admin")} />
                <Button text="Додати подію" onClick={handleAdd} />
            </nav>
            <main>
                {loading ? (
                    <Paragraph>Завантаження...</Paragraph>
                ) : (
                    <div style={{ overflowX: "auto" }}>
                        {events.length === 0 ? (
                            <Paragraph>Поки нічого нема...</Paragraph>
                        ) : (
                            <table
                                style={{
                                    width: "100%",
                                    borderCollapse: "collapse",
                                    textAlign: "left",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <thead style={{ backgroundColor: "#4f46e5", color: "white" }}>
                                    <tr>
                                        <th style={{ padding: "12px 15px" }}>Date</th>
                                        <th style={{ padding: "12px 15px" }}>Name</th>
                                        <th style={{ padding: "12px 15px" }}>Time</th>
                                        <th style={{ padding: "12px 15px" }}>Note</th>
                                        <th style={{ padding: "12px 15px", width: "150px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map(ev => (
                                        <EventRow 
                                            key={ev.id}
                                            event={ev}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                        />
                                    ))};
                                </tbody>
                            </table>
                        )};
                    </div>
                )};
            </main>
        </Card>
    );
};

export default EventsView;
