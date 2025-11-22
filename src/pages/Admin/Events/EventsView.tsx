import * as React from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../../../services/eventsService";
import { Event } from "../../../types/Event";

function EventsView() {
    const [events, setEvents] = React.useState<Event[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        try {
            fetchEvents()
            .then(fetched => setEvents(fetched))
            .catch(error => alert(error instanceof Error ? error.message : error))
            .finally(() =>setLoading(false));
        } catch (error: any) {
            alert(error instanceof Error ? error.message : error);
        }
    }, []);

    const nav = useNavigate();

    return (
        <div>
            <h1>Hello, CRUD!</h1>
            <button onClick={() => nav("/admin")}>Back</button>

            <hr />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
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
                                            <button>Edit</button>
                                            <button>Update</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            )}

        </div>
    );
};

export default EventsView;
