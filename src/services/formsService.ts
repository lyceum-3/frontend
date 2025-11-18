import httpClient from "../api/httpClient";

export const formsService = {
    async getAll() {
        const res = await httpClient.get("/api/forms");
        return res.data;
    },
};