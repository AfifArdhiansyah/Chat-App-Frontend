import React, { useState, useEffect } from "react";
import { Button} from "react-bootstrap";
import "../assets/styles/home.css"
import PeopleIcon from "../assets/images/people-icon.svg"
import NewMessageIcon from "../assets/images/new-message.svg"
import { ChatBox } from "../components";
import {useSelector, useDispatch} from "react-redux"
import {getConversations} from "../redux/slices/conversationSlice"

const Home = () =>{
    let {loading, status, message, conversations} = useSelector(state => state.conversations);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getConversations());
    }, [])
    let user = "";
    if(conversations.data){
        user = conversations.data.user.username;
    }
    const getReceiver = (obj) =>{
        if(obj.user1_conversation.username == user){
            return obj.user2_conversation.username;
        }else{
            return obj.user1_conversation.username;
        }
    }
    const getLastMessage = (obj) =>{
        const lastMessage = obj.chats[obj.chats.length - 1];
        return lastMessage.text;
    }
    return(
        <div className="home-page">
            <div className="header">
                <img src={PeopleIcon} alt="" />
                <h3>Chat App</h3>
                <Button className="new-message-btn">
                    <img src={NewMessageIcon} alt="" />
                </Button>
            </div>
            <div className="chat-container">
                {conversations.data ? (
                    conversations.data.conversations.map((obj, index) => {
                        return(
                            <ChatBox key={index} idConversation={obj.id} name={getReceiver(obj)} message={getLastMessage(obj)}/>
                        )
                    })
                ) : (
                    <h1>No Data</h1>
                )}
            </div>            
        </div>
    )
};

export default Home;