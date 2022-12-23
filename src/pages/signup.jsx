import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import "../assets/styles/login.css"
import ChatLogo from "../assets/images/chat-app-logo.svg"

const SignUp = () => {
    return(
        <div id="login-page">
            <div className="middle-content">
                <img src={ChatLogo} alt="" />
                <Form>
                    <div className="login-form">
                        <h2 className="text-center">SIGN UP</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>username</Form.Label>
                            <Form.Control className="input-field" placeholder="masukkan username anda" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>password</Form.Label>
                            <Form.Control className="input-field" placeholder="masukkan password anda" />
                        </Form.Group>
                    </div>    
                    <div className="button-container">
                        <Button className="left-button"><a href="/">log in</a></Button>
                        <Button className="right-button">submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default SignUp;