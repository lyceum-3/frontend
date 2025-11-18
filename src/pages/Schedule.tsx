import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Title from "../components/UI/Title";
import Label from "../components/UI/Label";
import Select from "../components/UI/Select";
import { daysOfWeek } from "../data/days";
import {useForms} from "../hooks/useForms";

function Schedule() {
    const [selectedDay, setSelectedDay] = React.useState<string>("");
    const [selectedForm, setSelectedForm] = React.useState<string>("");

    const nav = useNavigate();

    function handleSearch() {
        if (!selectedDay || !selectedForm) {
            alert("Please, fill all fields");
            return;
        }

        alert("Hello, world!");
    }

    return (
        <Card>
            <Title title={"Hello, schedule!"}/>

            <div style={{marginTop: "30px"}}/>

            <Label label={"Оберіть день"}/>
            <Select value={selectedDay} onChange={setSelectedDay} options={daysOfWeek}/>

            <div style={{marginTop: "20px"}}/>

            <Label label={"Оберіть клас"}/>
            <Select value={selectedForm} onChange={setSelectedForm} options={useForms()}/>

            <div style={{marginTop: "20px"}}/>

            <Button text="Search" onClick={handleSearch} />
            <Button text="To home" onClick={() => nav("/")} />
        </Card>
    )
}

export default Schedule;
