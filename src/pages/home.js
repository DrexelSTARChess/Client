import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


function simple() {
    //fetch('http://173.59.121.16:5000/startGame', { method: 'GET' }).then(function (response) {
    //    console.log(response);
    //    return response.json();

    //}).then(function (data) {
    //    console.log(data);
    //});

    //fetch('http://127.0.0.1:5000/startGame', { method: 'GET' }).then(function (response) {
    //    console.log(response);
    //    return response.json();

    //}).then(function (data) {
    //    console.log(data["player_number"]);
    //    fetch('http://127.0.0.1:5000/waitForPlayer/1', { method: 'GET' }).then(function (response) {
    //        console.log(response);

    //    });
    //});

    axios.get('http://127.0.0.1:5000/startGame')
        .then(function (response) {
            return response.data;


        }).then(function (data) {
            console.log(data);



            // ADD WAIT FOR PLAYER HERE


        })
        .catch(function (error){
        console.log(error);
    });


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
                    isPressed={this.simpleConnection}
                />
            </div>
        );
    }
}

export default Home;
