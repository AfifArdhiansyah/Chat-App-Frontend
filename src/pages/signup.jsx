import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import "../assets/styles/login.css"
import ChatLogo from "../assets/images/chat-app-logo.svg"
import {register} from "../redux/slices/authSlice"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const initialState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const redirect = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({formData, redirect}));
        setFormData(initialState);
    }
    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    return(
        <div id="login-page">
            <div className="middle-content">
                <img src={ChatLogo} alt="" />
                <Form onSubmit={handleSubmit}>
                    <div className="login-form">
                        <h2 className="text-center">SIGN UP</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>username</Form.Label>
                            <Form.Control name="username" className="input-field" onChange={handleChange} value={formData.username} placeholder="masukkan username anda" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>password</Form.Label>
                            <Form.Control name="password" className="input-field" onChange={handleChange} value={formData.password} placeholder="masukkan password anda" />
                        </Form.Group>
                    </div>    
                    <div className="button-container">
                        <Button className="left-button"><a href="/">log in</a></Button>
                        <Button className="right-button" type="submit">submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default SignUp;