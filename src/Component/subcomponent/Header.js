import React, { Component } from 'react';
import { Button, Container, Row, Col, Navbar, Nav, Carousel, Item } from 'react-bootstrap'
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="success" dark expand="lg">
                    <Navbar.Brand href="#home"><img src={require('../img/1.png')} width="90" height="60"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Sign Up</Nav.Link>
                            <Nav.Link href="#link">Sign In</Nav.Link>
                            <Button variant="primary" className="hbtn">Ticket your event</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header;