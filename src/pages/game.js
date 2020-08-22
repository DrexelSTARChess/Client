import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import BoardComponent from '../components/BoardComponent';
import axios from "axios";

class Game extends Component {
    componentDidMount = () => {
        //console.log("STARTING GAME AS PLAYER: " + this.props.location.state.playerNumber);
    }

    quitGame = (event, roundResult) => {
        console.log("Quitting...");
        //console.log(this.props.history);
        this.props.history.push(
            {
                pathname: "/Final",
                state: { result: roundResult}
            }
        );
    }

    render() {
        return (
            <div>
                <h1>YOU ARE INSIDE THE GAME</h1>

                <BoardComponent
                    playerNumber={this.props.location.state.playerNumber}
                    quitGamePress={this.quitGame}
                    startMoves={this.props.location.state.startMoves}/>


            </div>
        );
    }
}

export default Game;
