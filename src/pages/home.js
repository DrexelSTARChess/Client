import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


function simple() {
    fetch('http://173.59.121.16:5000/', { method: 'GET' }).then(function (response) {
        console.log(response);
        return response.text();
    }).then(function (data) {
        console.log(data);
    });

    //axios.get('http://173.59.121.16:5000/').then(function (response) {
    //    console.log(response);
    //});
}

class Home extends Component {
    startGame = (event) => {
        console.log("Starting game...");
        this.props.history.push("/Game");
    }

    simpleConnection = () => {
        simple();
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
