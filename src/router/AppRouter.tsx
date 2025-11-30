import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Login from "../pages/Login";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Events from "../pages/Events";
import ProtectedRoute from "./ProtectedRoute";
import EventsView from "../pages/Admin/Events/EventsView";
import EventsAdd from "../pages/Admin/Events/EventsAdd";
import EventsUpdate from "../pages/Admin/Events/EventsUpdate";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/login" element={<Login />} />
                <Route path="/events" element={<Events />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/admin/" element={<AdminDashboard />} />
                    <Route path="/admin/events" element={<EventsView />} />
                    <Route path="/admin/events/add" element={<EventsAdd />} />
                    <Route path="/admin/events/update/:id" element={<EventsUpdate />} />
                </Route>

                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
