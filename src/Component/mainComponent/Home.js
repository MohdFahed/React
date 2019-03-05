import React, { Component } from "react";
import Header from '../subcomponent/Header';
import CarouselDemo from '../subcomponent/CarouselDemo'
import Hottocket from '../subcomponent/Hotticket';
import Youtube from '../subcomponent/YouTube';
import ImgGallary from '../subcomponent/ImgGallary'
import Fooder from '../subcomponent/Fooder';
class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <CarouselDemo/>
                <Hottocket/>
                <Youtube/>
                <ImgGallary/>
                <Fooder/>
                </div>
        )
    }
}
export default Home;