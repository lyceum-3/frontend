import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Schedule() {
    const nav = useNavigate();

    return (
        <div>
            <h1>Hello, Schedule!</h1>
            <button onClick={() => nav("/")}>Back</button>
        </div>
    )
}

export default Schedule;
