import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            waiting: false
        };
    }

    componentDidMount() {
        console.log(process)
        this.setState({ waiting: false })
    }


    startGame = (event) => {
        this.setState({waiting: true})
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
        let waitResponseJson = await waitResponse.json();

        let startingMoves = waitResponseJson.move_data;

        this.props.history.push(
            {
                pathname: "/Game",
                state: {
                    playerNumber: player_number_data["player_number"],
                    startMoves: startingMoves
                }
            }
        );

    }


    render() {
        return (
            <div>
                <h1>WELCOME TO CHESS</h1>
                <p>This is chess!</p>

                {
                    this.state.waiting
                        ? <h2>Waiting...</h2>
                        : <ButtonComponent
                            label={"Start Game"}
                            isPressed={this.startGame}
                        />
                }
                <Link to="/Info" className="newLink">ABOUT</Link>
            </div>
        );
    }
}

export default Home;
