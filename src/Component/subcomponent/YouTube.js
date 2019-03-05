
import React,{Component} from 'react';
import Iframe from 'react-iframe'

class Youtube extends Component{
    render(){
        return(
            <div className="youtube">
                <h1>
Sellers, use  to create and sell your event tickets online</h1>
<Iframe url="https://www.youtube.com/embed/IyucJZev9wM"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
             </div>   
        )
    }
}
export default Youtube; 
