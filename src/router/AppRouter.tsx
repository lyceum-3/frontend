import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
