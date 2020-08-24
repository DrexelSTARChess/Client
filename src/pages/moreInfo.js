import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";

class moreInfo extends Component {

    render() {
        return (
            <div>
                <h1>INFO PAGE</h1>
                <p> Developed by Alexander Ho, Gulam Contractor, Hasan Talouli, Marc Ivan, Mustafa Genel </p>
                <p>Star chess 1.0</p>
                <p> Initial Release </p>
                <div>
                    <a href="https://docs.google.com/document/d/1QQHeACARZzLPx4VVjOqMfB-dAfdc5tKyP_wsEVZZTm8/edit" className="newLink"> Release notes </a>
                </div>
                <div>
                    <a href="http://www.chesscoachonline.com/chess-articles/chess-rules" className="newLink"> Chess rules </a>
                </div>
                <Link to="/" className="newLink">Back home</Link>

            </div>
        );
    }
}

export default moreInfo;
