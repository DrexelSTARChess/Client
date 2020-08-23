import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import BoardComponent from '../components/BoardComponent';
import axios from "axios";

class Game extends Component {
    componentDidMount = () => {
        //console.log("STARTING GAME AS PLAYER: " + this.props.location.state.playerNumber);
    }

    //quitGame = (resultPhrase) => {
    //    console.log(resultPhrase);
    //    //console.log("ROUND RESULT: " + roundResult);
    //    console.log("Quitting...");
    //    //console.log(this.props.history);
    //    this.props.history.push(
    //        {
    //            pathname: "/Final",
    //            state: { result: resultPhrase}
    //        }
    //    );
    //}

    render() {
        return (
            <div>

                <BoardComponent
                    playerNumber={this.props.location.state.playerNumber}
                    startMoves={this.props.location.state.startMoves}/>


            </div>
        );
    }
}

export default Game;
