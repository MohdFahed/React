import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './mainComponent/Home';
class Routing extends Component {
   
    render() {
        const PageNotFound = () => (
            <div>
                <h1>Page Not Found..</h1>
            </div>)
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route component={PageNotFound} />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default Routing;