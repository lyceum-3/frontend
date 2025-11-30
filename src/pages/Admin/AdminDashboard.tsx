import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";

function AdminDashboard() {
    const nav = useNavigate();

    function handleLogOut() {
        try {
            localStorage.removeItem("authToken");
            nav("/");
        } catch (error: any) {
            alert(error instanceof Error ? error.message : error);
        };
    };

    return (
        <Card>
            <header>
                <Title title="Hello, Admin" />
            </header>
            <nav>
                <Button text="Home" onClick={() => nav("/")} />
            </nav>
            <main>

                <Button text="Log out" onClick={() => handleLogOut} />
                <Button text="Керувати подіями" onClick={() => nav("/admin/events")} />
            </main>
        </Card>
    );
};

export default AdminDashboard;
