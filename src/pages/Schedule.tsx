import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import Label from "../components/UI/Label";
import Select from "../components/UI/Select";
import { daysOfWeek } from "../data/days";

function Schedule() {
    const [selectedDay, setSelectedDay] = React.useState<string>("");

    const nav = useNavigate();

    function handleSearch() {
        if (!selectedDay) {
            alert("Please, fill all fields");
            return;
        }

        alert("Hello, world!");
    }

    return (
        <Card>
            <Title title={"Hello, schedule!"}/>

            <div style={{marginTop: "30px"}}/>

            <Label label={"Оберіть день (demo)"}/>
            <Select value={selectedDay} onChange={setSelectedDay} options={daysOfWeek}/>

            <div style={{marginTop: "20px"}}/>

            <Button text="Search" onClick={handleSearch} />
            <Button text="To home" onClick={() => nav("/")} />
        </Card>
    )
}

export default Schedule;
