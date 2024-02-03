import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n = 3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game &#x1f389;</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div><br/>
            <button className="buyNewTicket" onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, You won!"}</h3>
        </div>
    )
}