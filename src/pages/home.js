import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';


class Home extends Component {
    startGame = (event) => {
        console.log("Starting game...");
        this.props.history.push("/Game");
    }
    render() {
        return (
            <div>
                <h1>WELCOME TO CHESS</h1>
                <p>This is chess!</p>


                <ButtonComponent
                    label={"Start Game"}
                    isPressed={this.startGame}
                />
            </div>
        );
    }
}

export default Home;
