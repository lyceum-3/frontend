import httpClient from "../api/httpClient";
import { Event } from "../types/Event";

async function fetchEvents(): Promise<Event[]> {
    try {
        const response = await httpClient.get<Event[]>("/api/events")
        return response.data;
    } catch (error: any) {
        throw new Error("Помилка серверу.");
    }
}

export default fetchEvents;
