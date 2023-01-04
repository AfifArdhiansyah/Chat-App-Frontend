import React, { useState, useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import "../assets/styles/room-chat.css"
import ImageIcon from "../assets/images/back.svg"
import ProfileIcon from "../assets/images/profile-white.svg"
import {Message} from "../components"
import SendIcon from "../assets/images/send.svg"
import {useSelector, useDispatch} from "react-redux"
import {getConversationById, updateConversation} from "../redux/slices/conversationSlice"
import {useParams} from "react-router-dom"

const RoomChat = () =>{
    const {idConv} = useParams();
    const {conversation} = useSelector(state => state.conversations)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getConversationById({idConversation: idConv}));
    }, [])
    let user = "";
    let receiver = "";
    const getReceiverId = (obj) =>{
        const user1 = obj.user1_conversation.id;
        if(user1 == user){
            return obj.user2_conversation.id;
        }else{
            return obj.user1_conversation.id;
        }
    }
    const getTime = (obj) =>{
        const time = obj.createdAt.split("T")[1];
        const hour = time.split(":")[0];
        const minute = time.split(":")[1];
        return `${hour}:${minute}`;
    }
    if(conversation.data){
        user = conversation.data.user.id;
        receiver = getReceiverId(conversation.data.conversation);
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
        if(user1 == user){
            return obj.user2_conversation.username;
        }else{
            return obj.user1_conversation.username;
        }
    }
    const [messageInput, setMessage] = useState("");
    const handleChange = (e) =>{
        setMessage(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = {
            receiver: receiver,
            message: messageInput
        }
        dispatch(updateConversation({formData})).then(() => {
            dispatch(getConversationById({idConversation: idConv}));
        })
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
                        return <Message key={index} isSender={isSender(obj)} message={obj.text} time={getTime(obj)}/>
                    }
                )) : (
                    <h1>No Data</h1>
                )}
            </div>
            <Form className="room-chat-footer">
                <Form.Control name="message" onChange={handleChange} className="input-message" placeholder="Ketikkan pesan.." />
                <Button type="submit" onClick={submitHandler} className="send-btn"><img src={SendIcon} alt="" /></Button>
            </Form>
        </div>
    );
}

export default RoomChat;