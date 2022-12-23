import React, { useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import "../assets/styles/login.css"
import ChatLogo from "../assets/images/chat-app-logo.svg"

const Login = () => {
    return(
        <div id="login-page">
            <div className="middle-content">
                <img src={ChatLogo} alt="" />
                <Form>
                    <div className="login-form">
                        <h2 className="text-center">LOGIN</h2>
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
                        <Button className="left-button"><a href="/signup">sign up</a></Button>
                        <Button className="right-button"><a href="/home">log in</a></Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default Login;