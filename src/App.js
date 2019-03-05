import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, Navbar, Nav, Carousel, Item } from 'react-bootstrap'
import Home from './Component/mainComponent/Home';
import Routing from './Component/Routing'
class App extends Component {
  render() {
    return (
       <div>
        <Routing/>
         </div>
    );
  }
}


export default App;
