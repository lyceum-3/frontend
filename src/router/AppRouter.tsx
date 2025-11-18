import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
