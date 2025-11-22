import * as React from "react";
import { useNavigate } from "react-router-dom";

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
        <>
            <header>
                <h1>Hello, Admin</h1>
            </header>
            <nav>
                <button onClick={() => nav("/")}>Home</button>
                <button onClick={handleLogOut}>Log out</button>
                <button onClick={() => nav("/admin/events")}>Керувати подіями</button>
            </nav>
        </>
    );
};

export default AdminDashboard;
