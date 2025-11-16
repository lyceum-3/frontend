import * as React from 'react';
import { useNavigate } from "react-router-dom"

function Home() {
    const nav = useNavigate();

    return (
        <div>
            <h1>Hello, world!</h1>
            <button onClick={() => nav("/schedule")}>To schedule</button>
        </div>
    )
}

export default Home;
