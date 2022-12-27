import React, { useState, useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import "../assets/styles/room-chat.css"
import ImageIcon from "../assets/images/back.svg"
import ProfileIcon from "../assets/images/profile-white.svg"
import {Message} from "../components"
import SendIcon from "../assets/images/send.svg"
import {useSelector, useDispatch} from "react-redux"
import {getConversationById} from "../redux/slices/conversationSlice"
import {useParams} from "react-router-dom"

const RoomChat = () =>{
    const {idConv} = useParams();
    const {conversation} = useSelector(state => state.conversations)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getConversationById({idConversation: idConv}));
    }, [])
    let user = "";
    if(conversation.data){
        user = conversation.data.user.id;
    }
    const isSender = (obj) =>{
        if(obj.from_user_id == user){
            return true;
        }else{
            return false;
        }
    }
    const getReceiver = (obj) =>{
        const user1 = obj.user1_conversation.id;
        const user2 = obj.user2_conversation.id;
        if(user1 == user){
            return obj.user2_conversation.username;
        }else{
            return obj.user1_conversation.username;
        }
    }
    return(
        <div id="room-chat-page">
            <div className="room-chat-header">
                <Button className="back-btn"><a href="/home"><img src={ImageIcon} alt="" /></a></Button>
                <img src={ProfileIcon} alt="" />
                <h3>{conversation.data? (getReceiver(conversation.data.conversation)) : ("Unknown")}</h3>
            </div>
            <div className="message-container">
                {conversation.data ? (
                    conversation.data.conversation.chats.map((obj, index) => {
                        return <Message key={index} isSender={isSender(obj)} message={obj.text} time={"12:13"}/>
                    }
                )) : (
                    <h1>No Data</h1>
                )}
            </div>
            <Form className="room-chat-footer">
                <Form.Control className="input-message" placeholder="Ketikkan pesan.." />
                <Button type="submit" className="send-btn"><img src={SendIcon} alt="" /></Button>
            </Form>
        </div>
    );
}

export default RoomChat;