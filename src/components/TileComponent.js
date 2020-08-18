import React, { Component } from 'react';

class TileComponent extends Component {
    render() {
        return (
            <th className={this.props.tile}
                onClick={((e) => this.props.isPressed(e, "YEET"))}></th>
        );
    }
}

export default TileComponent;
