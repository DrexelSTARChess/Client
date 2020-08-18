import React, { Component } from 'react';
import './board.css';

class TileComponent extends Component {
    render() {
        return (
            <th className={this.props.tile}
                onClick={((e) => this.props.isPressed(e, this.props.coord))}><p>{this.props.piece}</p></th>
        );
    }
}

export default TileComponent;
