import React, { Component } from 'react';
import TileComponent from '../components/TileComponent';
import './board.css';


class BoardComponent extends Component {

    createTiles = (startTile, isPressed, rowNum) => {
        let currentTile = startTile;
        let tiles = []
        for (let i = 0; i < 8; i++) {
            tiles.push(
                <TileComponent key={[i, rowNum]} tile={currentTile} isPressed={this.props.isPressed} />
            )
            if (currentTile == "grayTile") {
                currentTile = "blackTile";
            }
            else {
                currentTile = "grayTile";
            }
        }
        return tiles;
    }


    initializeBoard = () => {
        let table = []
        let rows = []
        let startTile = "grayTile";

        for (let i = 0; i < 8; i++) {
            rows.push(<tr key={i}>{this.createTiles(startTile, this.props.isPressed, i)}</tr>)
            if (startTile == "grayTile") {
                startTile = "blackTile";
            }
            else {
                startTile = "grayTile";
            }
        }

        table.push(
            <table key="chessBoard">
                <tbody>
                    {rows}
                </tbody>
            </table>      
        )
        return table;
    }


    render() {
        return (
            <div>
                {this.initializeBoard()}

            </div>
        );
    }
}

export default BoardComponent;
