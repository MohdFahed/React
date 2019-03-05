import React,{Component} from 'react';
import { Button, Container, Row, Col, Navbar, Nav, Carousel, Item } from 'react-bootstrap'
class CarouselDemo extends Component{
    render(){
        return(
            <div>
                 <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={require("../img/ftr-bg.jpg")}
                alt="First slide"
                height="550"
              />
              <Carousel.Caption>
              <h3 >Tickets made simple for everyone, everywhere</h3>
                <p>TEXT</p>
    
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/ftr-bg.jpg")}
                alt="Third slide"
                height="550"
              />

              <Carousel.Caption>
                 <h3 >Tickets made simple for everyone, everywhere</h3>
                <p>TEXT</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../img/ftr-bg.jpg")}
                alt="Third slide"
                height="550"
              />

              <Carousel.Caption>
                <h3 >Tickets made simple for everyone, everywhere</h3>
                <p>TEXT </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
                </div>
        )
    }
}
export default CarouselDemo;