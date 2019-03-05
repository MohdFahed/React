import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Fooder extends Component {
    render() {
        return (
            <div>
            <Container fluid={true}>
                <Row className="fooder">
                    <Col>
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">24x7 Customer Service</a></li>
                            <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                            <li><a href="#">Reprint Confirmation</a></li>

                        </ul>
                    </Col>
                    <Col>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">24x7 Customer Service</a></li>
                        <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                        <li><a href="#">Reprint Confirmation</a></li>
                    </ul>

                    </Col>
                    <Col>
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">24x7 Customer Service</a></li>
                            <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                            <li><a href="#">Reprint Confirmation</a></li>
                           </ul>
                            </Col>

                            <Col>
                                <h4>Help</h4>
                                <ul>
                                    <li><a href="#">24x7 Customer Service</a></li>
                                    <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                                    <li><a href="#">Reprint Confirmation</a></li>
                                </ul>
                            </Col>
                   </Row>
            </Container>
            </div>
                    )
                }
            }
export default Fooder;