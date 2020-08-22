import React, { Component } from 'react';
import './board.css';

class TileComponent extends Component {
    constructor(props) {
        super();
        this.state = { piece: props.piece , tileClass: null, unhighlightClass: null, highlightClass: null};

    }

    componentDidMount = () => {
        if (this.props.tile == "grayTile") {

            this.setState({ unhighlightClass : "grayTile" });
            this.setState({ highlightClass : "highlightGray" });
        }
        else {

            this.setState({ unhighlightClass: "blackTile" });
            this.setState({ highlightClass: "highlightBlack" })

        }
        this.setState({ tileClass: this.props.tile });
    }

    setPiece = (newPiece) => {
        this.setState({ piece: newPiece });
    }

    highlightOn = () => {
        this.setState({ tileClass: this.state.highlightClass })
    }

    highlightOff = () => {
        this.setState({ tileClass: this.state.unhighlightClass })
    }

    render() {
        return (
            <th className={this.state.tileClass}
                onClick={((e) => this.props.isPressed(e, this.props.coord))}><p>{this.state.piece}</p></th>
        );
    }
}

export default TileComponent;
