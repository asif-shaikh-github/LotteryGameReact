import { useState } from "react";
import { generateTicket } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket ] = useState(generateTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(generateTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br />
            <Button action={buyTicket} />
            <h3>{ isWinning && "Congraulations, you've won" }</h3>
        </div>
    )
}

