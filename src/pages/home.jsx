import React, { useEffect } from "react";
import { Button} from "react-bootstrap";
import "../assets/styles/home.css"
import PeopleIcon from "../assets/images/people-icon.svg"
import NewMessageIcon from "../assets/images/new-message.svg"
import { ChatBox } from "../components";

const Home = () =>{
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
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
                <ChatBox name={"Kokom"} message={"Apa kabar nagabs?"}/>
                <ChatBox name={"Ari"} message={"Assalamualaikum"}/>
            </div>            
        </div>
    )
};

export default Home;