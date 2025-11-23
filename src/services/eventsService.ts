import httpClient from "../api/httpClient";
import { Event } from "../types/Event";

export async function fetchEvents(): Promise<Event[]> {
    try {
        const response = await httpClient.get<Event[]>("/api/events")
        return response.data;
    } catch (error: any) {
        throw new Error("Помилка серверу.");
    }
}

export async function fetchEventById(id: number): Promise<Event> {
    try {
        return (await httpClient.get<Event>(`/api/events/${id}`)).data;
    } catch (error: any) {
        throw new Error("Помилка серверу.")
    }
}

export async function createEvent(event: Event) {
    try {
        return (await httpClient.post<Event>("/api/events", event)).data;
    } catch (error: any) {
        throw new Error("Помилка серверу.")
    }
}

export async function updateEvent(id: number, event: Event) {
    try {
        return (await httpClient.put<Event>(`/api/events/${id}`, event)).data;
    } catch (error: any) {
        throw new Error("Помилка серверу.")
    }
}

export async function deleteEvent(id: number) {
    try {
        await httpClient.delete(`/api/events/${id}`);
    } catch (error: any) {
        throw new Error("Помилка серверу.")
    }
}
