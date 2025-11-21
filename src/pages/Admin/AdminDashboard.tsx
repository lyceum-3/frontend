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
        }
    }

    return (
        <div>
            <h1>Hello, Admin</h1>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default AdminDashboard;
