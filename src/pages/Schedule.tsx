import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";

function Schedule() {
    const nav = useNavigate();

    return (
        <Card>
            <Title title={"Hello, schedule!"}/>
            <Button text="To home" onClick={() => nav("/")} />
        </Card>
    )
}

export default Schedule;
