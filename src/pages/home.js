import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


function simple() {


    fetch('http://127.0.0.1:5000/startGame', { method: 'GET' }).then(function (response) {
        console.log(response);
        return response.json();

    }).then(function (data) {

        console.log(data["player_number"]);
        let dataa = { player_number: data["player_number"] };
        fetch('http://127.0.0.1:5000/waitForPlayer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataa) }).then(function (response) {
            console.log(response);
        });


    });


}

let me = this;

async function waitForPlayer(data) {
    console.log(data["player_number"]);
    let dataa = { player_number: data["player_number"] };
    let newResponse = await fetch('http://127.0.0.1:5000/waitForPlayer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataa) }).then(function (response) {
        console.log(response);
    });
    return;
}

class Home extends Component {
    startGame = (event) => {
        this.simpleConnection();
    }


    async waitForPlayer(data) {
        console.log(data["player_number"]);
        let dataa = { player_number: data["player_number"] };
        let newResponse = await fetch('http://127.0.0.1:5000/waitForPlayer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataa) }).then(function (response) {
            console.log(response);
        });
    return;
}

    async simpleConnection() {
        let response = await fetch('http://127.0.0.1:5000/startGame', { method: 'GET' })
        let data = await response.json();
        let waitResponse = await fetch('http://127.0.0.1:5000/waitForPlayer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })

        console.log("WOWOWOWO " + waitResponse);
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
