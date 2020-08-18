import React, { Component } from 'react';
import TileComponent from '../components/TileComponent';
import './board.css';

let whiteKing = '\u2654';
let whiteQueen = '\u2655';
let whiteRook = '\u2656';
let whiteBishop = '\u2657';
let whiteKnight = '\u2658';
let whitePawn = '\u2659';
let blackKing = '\u265A';
let blackQueen = '\u265B';
let blackRook = '\u265C';
let blackBishop = '\u265D';
let blackKnight = '\u265E';
let blackPawn = '\u265F';
let noPiece = '';

let startData = [
    [blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook],
    [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn ],
    [noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece],
    [noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece],
    [noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece],
    [noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece, noPiece],
    [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
    [whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook]
]


class BoardComponent extends Component {

    createTiles = (startTile, isPressed, rowNum, boardData) => {
        let currentTile = startTile;
        let tiles = []
        for (let i = 0; i < 8; i++) {
            tiles.push(
                <TileComponent key={[i, rowNum]} coord={[i, rowNum]} tile={currentTile} isPressed={this.props.isPressed} piece={boardData[rowNum][i]}/>
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


    updateBoard = (boardData) => {
        let table = []
        let rows = []
        let startTile = "grayTile";

        for (let i = 0; i < 8; i++) {
            rows.push(<tr key={i}>{this.createTiles(startTile, this.props.isPressed, i, boardData)}</tr>)
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
                {this.updateBoard(startData)}

            </div>
        );
    }
}

export default BoardComponent;
