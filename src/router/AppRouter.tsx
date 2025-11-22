import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Login from "../pages/Login";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Events from "../pages/Events";
import ProtectedRoute from "./ProtectedRoute";
import EventsView from "../pages/Admin/Events/EventsView";
import EventsAdd from "../pages/Admin/Events/EventsAdd";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                } />
                <Route path="/admin/events" element={
                    <ProtectedRoute>
                        <EventsView />
                    </ProtectedRoute>
                } />
                <Route path="/admin/events/add" element={
                    <ProtectedRoute>
                        <EventsAdd />
                    </ProtectedRoute>
                } />
                <Route path="/events" element={<Events />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
