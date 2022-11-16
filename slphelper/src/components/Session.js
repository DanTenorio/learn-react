import clsx from "clsx";
import { useState } from "react";
import Client from "./Client";

export default function Session(props)
{
    // let className = "";
    // if (props.loggedIn) {
    //     className = "title";
    // }
    const [seconds, setSeconds] = useState(0);

    const className = clsx({"title": props.loggedIn});
    return(
        <>
            <h1 className={className}>Session</h1>
            <Client name = "Jim" />
            <br/>
            <Client name = "Bob"/>
            <br/>
            <Client name ="Joe"/>
        </>
    );
}