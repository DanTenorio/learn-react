import { useState } from "react";

export default function Client(props)
{
    const [fails, setFails] = useState(0);
    const [successes, setSuccesses] = useState(0);

    function handleFailureClick()
    {
        setFails(fails + 1);
    }

    function handleSuccessClick()
    {
        setSuccesses(successes + 1);
    }

    return(
        <>
        <button onClick={handleFailureClick}>- {fails}</button>
        <p>{props.name}</p>
        <button onClick={handleSuccessClick}>+ {successes}</button>
        </>
    );
}