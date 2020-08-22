import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import Game from './pages/game'
import Home from './pages/home'
import Final from './pages/finalPage'
import NotFound from './pages/404Page'

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Game" component={Game} />
                    <Route exact path="/Final" component={Final} />
                    <Route exact path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;
