import React, { useEffect, useState } from "react";
import { Form, Button} from "react-bootstrap";
import "../assets/styles/login.css"
import ChatLogo from "../assets/images/chat-app-logo.svg"
import {login} from "../redux/slices/authSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getConversations} from "../redux/slices/conversationSlice"

const Login = () => {
    const initalState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initalState);
    const dispatch = useDispatch();
    const redirect = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login({formData}));
        dispatch(getConversations({redirect}));
        setFormData(initalState);
    };
    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    };
    return(
        <div id="login-page">
            <div className="middle-content">
                <img src={ChatLogo} alt="" />
                <Form onSubmit={handleSubmit}>
                    <div className="login-form">
                        <h2 className="text-center">LOGIN</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>username</Form.Label>
                            <Form.Control name="username" className="input-field" placeholder="masukkan username anda" onChange={handleChange} value={formData.username} required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>password</Form.Label>
                            <Form.Control name="password" className="input-field" placeholder="masukkan password anda" onChange={handleChange} value={formData.password} required/>
                        </Form.Group>
                    </div>    
                    <div className="button-container">
                        <Button className="left-button"><a href="/signup">sign up</a></Button>
                        <Button className="right-button" type="submit">log in</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default Login;