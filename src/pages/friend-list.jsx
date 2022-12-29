import { Button } from "react-bootstrap";
import BackIcon from "../assets/images/back.svg"
import NewMessageIcon from "../assets/images/new-message.svg"
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { FriendBox } from "../components";
import "../assets/styles/friend-list.css"
import {getFriends} from "../redux/slices/friendSlice"

const FriendList = () =>{
    let {loading, status, message, friends} = useSelector(state => state.friends);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFriends());
    }, [])
    return(
        <div className="friend-list-page">
            <div className="friend-list-header">
                <Button className="back-btn"><a href="/home"><img src={BackIcon} alt="" /></a></Button>
                <h3>Friend List</h3>
                <Button className="new-message-btn">
                    <img src={NewMessageIcon} alt="" />
                </Button>
            </div>
            <div className="friend-list-container">
                {friends.data ? (
                    friends.data.friend_list.map((obj, index) => {
                        return(
                            <FriendBox key={index} username={obj.username}/>
                        )
                    }
                ))
                : (
                    <h1>No Data</h1>
                )}
            </div>            
        </div>
    )
};

export default FriendList;