import React,{Component} from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
class ImgGallary extends Component{
    render(){
        return(
        <div className="pictitle">
            <h1>Browse by top categories</h1>
            <Container fluid={true}>
                <Row >
                    <Col md={{span:4}}><Image src={require("../img/1.png")}  height="300px" width="100%" className="pic" rounded /></Col>
                    <Col md={{span:4}} ><Image src={require("../img/1.png")}  height="300px" width="100%" className="pic" rounded /></Col>
                    <Col md={{span:4}} ><Image src={require("../img/1.png")}  height="300px" width="100%" className="pic" rounded /></Col>

                    </Row>
              </Container>
              <hr/>
           </div>   
        )
    }
}
export default ImgGallary;
