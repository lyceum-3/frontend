import { Navigate } from "react-router-dom";
import { JSX } from "react";

function ProtectedRoute({ children }: {children:  JSX.Element}) {
    const token = localStorage.getItem("authToken");

    if (!token) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute;
