import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
class Hottocket extends Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                            <h3 className="ttitle">Hot Tickets</h3>
                            <h5>Get tickets to your favourite events</h5>
                        </Col>
                    </Row>
                </Container>

                <Container>
                 <Row>
                    <Col md={{}}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../img/1.png')}  height="200"/>
                        <Card.Body>
                          <Card.Title><a href="#">Match</a></Card.Title>
                           <Card.Text>
                                Match TEXT Match TEXT Match TEXT Match TEXT Match TEXT
                            </Card.Text>
                            <hr/>
                        </Card.Body>
                      </Card>          
                </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../img/1.png')} height="200" />
                            <Card.Body>
                                <Card.Title><a href="#">Match</a></Card.Title>
                                <Card.Text>
                                Match TEXT Match TEXT Match TEXT Match TEXT Match TEXT
                                </Card.Text>
                                <hr/>

                            </Card.Body>
                        </Card>
                </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../img/1.png')} height="200" />
                            <Card.Body>
                                <Card.Title><a href="#">Match</a></Card.Title>
                                <Card.Text>
                                Match TEXT Match TEXT Match TEXT Match TEXT Match TEXT
                               </Card.Text>   
                                <hr/>
                            </Card.Body>
                        </Card>
                     </Col>
                    </Row>
                </Container>
            </div>
        )
    }


}
export default Hottocket;