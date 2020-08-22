import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


class moreInfo extends Component {
    returnHome = () => {
        this.props.history.push(
            {
                pathname: "/",
            }
        );
    }

    render() {
        return (
            <div>
                <h1>YOU {this.props.won}</h1>
                <div>
                    <Link to="/"> Back to Home </Link>
                </div>

            </div>
        );
    }
}

export default moreInfo;
