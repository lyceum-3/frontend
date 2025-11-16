import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
