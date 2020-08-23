import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import axios from "axios";


class Final extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        };
    }

    componentDidMount() {
        console.log(this.props.location.state.result);
        console.log(this.props.location);
        this.setState({ result: this.props.location.state.result})
    }

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
                <h1>YOU {this.state.result}</h1>
                <div>
                    <Link to="/"> Back to Home </Link>
                </div>

            </div>
        );
    }
}

export default Final;
