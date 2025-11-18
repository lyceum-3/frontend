import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import Label from "../components/UI/Label";
import Input from "../components/UI/Input";

function Login() {
    const nav = useNavigate();

    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleLogin() {
        if (!login || !password) {
            alert("Please, fill all fields...");
            return;
        }
        alert("Submit");
    }

    return (
        <Card>
            <Title title={"Зареєструйся!"} />

            <div style={{marginTop: "20px"}} />

            <Label label={"Введіть логін"} />
            <Input type={"text"} value={login} onChange={setLogin} />

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
