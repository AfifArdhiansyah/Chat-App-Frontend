import {Button, Col, Row} from "react-bootstrap";
import "../assets/styles/friend-list.css"
import ProfileIcon from "../assets/images/profile.svg"

const FriendBox = ({username}) =>{
    return(
        <a className="href-friend" href="">
            <Row className="friend-box">
                <Col xs={3} className="friend-box-profile">
                    <img src={ProfileIcon} alt="" />
                </Col>
                <Col xs={9} className="friend-box-info">
                    {username}
                </Col>
            </Row>
        </a>
    )
};

export default FriendBox;