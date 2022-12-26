import React, { useEffect } from "react";
import {Col, Row} from "react-bootstrap";
import "../assets/styles/home.css"
import ProfileIcon from "../assets/images/profile.svg"

const ChatBox = ({idReceiver, name, message}) =>{
    return(
        <a className="href-chat" href="/chat">
            <Row className="chat-box">
                <Col className="col-3"><img src={ProfileIcon} alt="" /></Col>
                <Col>
                    <div className="chat-name">{name}</div>
                    <div className="chat-message">{message}</div>
                </Col>
            </Row>
        </a>
    )
};

export default ChatBox;