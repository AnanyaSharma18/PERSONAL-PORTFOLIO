import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./mailchimpForm"
import profilePic from "../assets/img/profile_pic.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={profilePic} alt="Profile-Picture" className="profile-pic" />
                        <p className="footer-text">
                            Thanks for visiting! I’m Ananya, a tech enthusiast exploring new horizons.
                            Let’s connect and make something amazing together. 🚀
                        </p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sharma-ananya/"><img src={navIcon1} /></a>
                            <a href="https://github.com/AnanyaSharma18"><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2024. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}