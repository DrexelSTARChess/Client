import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


class Home extends Component {
    startGame = (event) => {
        this.simpleConnection();
    }


    async waitForPlayer(data) {
        console.log(data["player_number"]);
        let playerNumber = { player_number: data["player_number"] };
        let newResponse = await fetch('http://127.0.0.1:5000/waitForPlayer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(playerNumber) }).then(function (response) {
            console.log(response);
        });
        return;
    }

    async simpleConnection() {
        let response = await fetch('http://127.0.0.1:5000/startGame', { method: 'GET' })
        let data = await response.json();
        let player_number_data = { player_number: data["player_number"] }
        console.log(player_number_data);
        let waitResponse = await fetch('http://127.0.0.1:5000/waitForPlayer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(player_number_data) })

        console.log("WOWOWOWO " + waitResponse);
        this.props.history.push(
            {
                pathname: "/Game",
                state: {
                    playerNumber: player_number_data["player_number"]
                }
            }
        );

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
