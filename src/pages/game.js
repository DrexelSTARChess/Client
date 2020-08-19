import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import BoardComponent from '../components/BoardComponent';


class Game extends Component {
    quitGame = (event) => {
        console.log("Quitting...");
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>YOU ARE INSIDE THE GAME</h1>
                <p>PLAY SOME CHESS</p>

                <BoardComponent />

                <ButtonComponent
                    label={"Quit"}
                    isPressed={this.quitGame}
                />
            </div>
        );
    }
}

export default Game;
