import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Label from "../components/UI/Label";
import Input from "../components/UI/Input";
import loginRequest from "../services/Auth";
import {LoginRequest} from "../types/LoginRequest";

function Login() {
    const nav = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleLogin() {
        if (!username || !password) {
            alert("Please, fill all fields...");
            return;
        }

        try {
            const data: LoginRequest = ({ username: username, password: password })
            const response = await loginRequest(data);

            localStorage.setItem("authToken", response.token);

            nav("/admin");
        } catch (error: any) {
            alert(error instanceof Error ? error.message : error);
        }
    }

    return (
        <Card>
            <Title title={"Зареєструйся!"} />

            <div style={{marginTop: "20px"}} />

            <Label label={"Введіть логін"} />
            <Input type={"text"} value={username} onChange={setUsername} />

            <div style={{marginTop: "20px"}} />

            <Label label={"Введіть пароль"} />
            <Input type={"password"} value={password} onChange={setPassword} />

            <div style={{marginTop: "20px"}} />

            <Button text={"Назад"} onClick={() => {nav("/")}} />
            <Button text={"Ввійти"} onClick={handleLogin} />
        </Card>
    )
}

export default Login;
