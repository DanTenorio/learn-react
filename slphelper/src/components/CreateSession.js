import { useState } from "react";

export default function CreateSession()
{
    const [clients, setClients] = useState([]);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [validation, setValidation] = useState("");

    function handleFormSubmit(e){
        e.preventDefault();

        if(!name){
            setValidation("Please enter a name!");
            return;
        }
        if(!goal){
            setValidation("Please enter a goal!");
            return;
        }

        setClients([...clients, {id: clients.length + 1, name: name, goal: goal}])
        setGoal("");
        setName("");
        setValidation("");
    }

    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="goal">Goal:</label>
            <input type="text" id="goal" value={goal} onChange={e => setGoal(e.target.value)} />
            <input type="submit" value="Add Client" />
        </form>
        </>
    );
}