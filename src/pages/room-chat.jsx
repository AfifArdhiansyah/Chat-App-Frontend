import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import "../assets/styles/room-chat.css"
import ImageIcon from "../assets/images/back.svg"
import ProfileIcon from "../assets/images/profile-white.svg"
import {Message} from "../components"
import SendIcon from "../assets/images/send.svg"
import {useSelector} from "react-redux"

const RoomChat = () =>{
    const {loading, status, message, conversations} = useSelector(state => state.conversations)
    let user = "";
    if(conversations.data){
        user = conversations.data.user.id;
    }
    const isSender = (obj) =>{
        if(obj.from_user_id == user){
            return true;
        }else{
            return false;
        }
    }
    return(
        <div id="room-chat-page">
            <div className="room-chat-header">
                <Button className="back-btn"><a href="/home"><img src={ImageIcon} alt="" /></a></Button>
                <img src={ProfileIcon} alt="" />
                <h3>Kokom</h3>
            </div>
            <div className="message-container">
                <Message isSender={true} message={"Gimana kabar sob?"} time={"12:13"}/>
                <Message isSender={false} message={"Alhamdulillah sehat ngabs"} time={"12:44"}/>
                <Message isSender={true} message={"Alhamdulillah kalau begitu"} time={"14:07"}/>
                <Message isSender={false} message={"Dirimu sendiri bagaimana kabarnya?"} time={"14:33"}/>
                <Message isSender={true} message={"Jikalau diriku baik baik saja keadannya, sehingga diriku ini banyak beraktivitas"} time={"15:00"}/>
            </div>
            <Form className="room-chat-footer">
                <Form.Control className="input-message" placeholder="Ketikkan pesan.." />
                <Button type="submit" className="send-btn"><img src={SendIcon} alt="" /></Button>
            </Form>
        </div>
    );
}

export default RoomChat;