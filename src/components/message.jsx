import React, { useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import "../assets/styles/room-chat.css"
import SendIcon from "../assets/images/send.svg"

const Message = ({isSender, message, time}) =>{
    let messageType = true;
    isSender? messageType = "message send" : messageType = "message receive";
    return(
        <div className={messageType}>
            <div className="text">{message}</div>
            <div className="time-send">{time}</div>
        </div>
    )
}

export default Message;