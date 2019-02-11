import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import {Switch, Route} from 'react-router-dom';
import { Home } from './Home.js';

export class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Home/> : <Login handleSuccessfulLogin={this.props.handleSuccessfulLogin}/>;
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Home}/>
                    <Route render={this.getLogin}/>
                </Switch>
            </div>
        );
    }
}
