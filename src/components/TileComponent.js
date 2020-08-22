import React, { Component } from 'react';
import './board.css';

class TileComponent extends Component {
    constructor(props) {
        super();
        this.state = { piece: props.piece };
    }

    setPiece = (newPiece) => {
        this.setState({ piece: newPiece });
    }

    render() {
        return (
            <th className={this.props.tile}
                onClick={((e) => this.props.isPressed(e, this.props.coord))}><p>{this.state.piece}</p></th>
        );
    }
}

export default TileComponent;
