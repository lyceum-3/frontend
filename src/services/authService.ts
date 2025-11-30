import httpClient from "../api/httpClient";
import {LoginRequest} from "../types/LoginRequest";
import {LoginResponse} from "../types/LoginResponse";

async function loginRequest(data: LoginRequest): Promise<LoginResponse> {
    try {
        const response = await httpClient.post<LoginResponse>(
            "api/auth/login",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error("Невірний логін або пароль");
        } else if (error.response?.status === 500) {
            throw new Error("Помилка з'єднання з сервером");
        } else {
            throw new Error("Щось пішло не так...");
        }
    }
}

export default loginRequest;
