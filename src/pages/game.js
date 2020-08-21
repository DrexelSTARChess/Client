import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import BoardComponent from '../components/BoardComponent';
import axios from "axios";

class Game extends Component {
    componentDidMount = () => {
        //console.log(this.props.location.state.playerNumber);
    }
    quitGame = (event) => {
        console.log("Quitting...");
        this.props.history.push("/");
    }

    //async makeMove() {
    //    //let data = { player_number: this.props.location.state.playerNumber};
    //    //let newResponse = await fetch('http://127.0.0.1:5000/submitBoard', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })

    //}

    render() {
        return (
            <div>
                <h1>YOU ARE INSIDE THE GAME</h1>
                <p>PLAY SOME CHESS</p>

                <BoardComponent
                    playerNumber={this.props.location.state.playerNumber}/>

                <ButtonComponent
                    label={"Quit"}
                    isPressed={this.quitGame}
                />
            </div>
        );
    }
}

export default Game;
