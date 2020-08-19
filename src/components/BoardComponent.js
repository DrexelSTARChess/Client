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
// possibly add highlights, need to find a way to reference each individual tile component by coordinate


// THIS WOULD BE AN EXAMPLE OF WHAT BOARD DATA SHOULD LOOK LIKE
let boardData = [
    ["blackRook", "blackKnight", "blackBishop", "blackQueen", "blackKing", "blackBishop", "blackKnight", "blackRook"],
    ["blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn"],
    ["whiteRook", "whiteKnight", "whiteBishop", "whiteQueen", "whiteKing", "whiteBishop", "whiteKnight", "whiteRook"]
];

let exampleMoveData = [
    {
        pieceName: "blackPawn",
        tileCoord: [0, 1],
        possibleMoves: [[0, 2], [0, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [1, 1],
        possibleMoves: [[1, 2], [1, 3]]
    }
];

// What the client will receive after waiting for the server response
let exampleJSONDataFromServer =
{
    boardData: [
        ["blackRook", "blackKnight", "blackBishop", "blackQueen", "blackKing", "blackBishop", "blackKnight", "blackRook"],
        ["blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn"],
        ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
        ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
        ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
        ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
        ["whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn"],
        ["whiteRook", "whiteKnight", "whiteBishop", "whiteQueen", "whiteKing", "whiteBishop", "whiteKnight", "whiteRook"]
    ],

    moveData: [
        {
            pieceName: "blackPawn",
            tileCoord: [0, 1],
            possibleMoves: [[0, 2], [0, 3]]
        },

        {
            pieceName: "blackPawn",
            tileCoord: [1, 1],
            possibleMoves: [[1, 2], [1, 3]]
        }
    ]
}

let testMoveData = [
    {
        pieceName: "blackPawn",
        tileCoord: [0, 1],
        possibleMoves: [[0, 2], [0, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [1, 1],
        possibleMoves: [[1, 2], [1, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [2, 1],
        possibleMoves: [[2, 2], [2, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [3, 1],
        possibleMoves: [[3, 2], [3, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [4, 1],
        possibleMoves: [[4, 2], [4, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [5, 1],
        possibleMoves: [[5, 2], [5, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [6, 1],
        possibleMoves: [[6, 2], [6, 3]]
    },

    {
        pieceName: "blackPawn",
        tileCoord: [7, 1],
        possibleMoves: [[7, 2], [7, 3]]
    },

    {
        pieceName: "blackKing",
        tileCoord: [4, 0],
        possibleMoves: [[0, 0]],
        isSpecial: true,
        specialMove: [
            {
                pieceName: "rook",
                tileCoord: [0, 0],
                newPosition: [4, 0]
            },
            {
                pieceName: "king",
                tileCoord: [4, 0],
                newPosition: [0, 0]
            }
        ]
    }
]

let currentValidMoves = [];
let currentPiece = '';
let previousTarget = null;
let previousCoord = [];

function areArraysEqual(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

let conversion = {
    "blackPawn": blackPawn,
    "blackRook": blackRook,
    "blackKnight": blackKnight,
    "blackBishop": blackBishop,
    "blackQueen": blackQueen,
    "blackKing": blackKing,
    "whitePawn": whitePawn,
    "whiteRook": whiteRook,
    "whiteKnight": whiteKnight,
    "whiteBishop": whiteBishop,
    "whiteQueen": whiteQueen,
    "whiteKing": whiteKing,
    "noPiece": noPiece
}

class BoardComponent extends Component {

    move = (event, data) => {
        console.log(data);
        for (let i = 0; i < testMoveData.length; i++)
        {
            if (areArraysEqual(data, testMoveData[i].tileCoord)) {
                console.log("valid SPACE!");
                previousTarget = event.target;
                previousCoord = testMoveData[i].tileCoord;
                currentValidMoves = testMoveData[i].possibleMoves;
                currentPiece = testMoveData[i].pieceName;
                console.log(currentValidMoves);
                return
            }
        }

        for (let x = 0; x < currentValidMoves.length; x++) {
            if (areArraysEqual(data, currentValidMoves[x])) {
                console.log("made a move!");
                event.target.textContent = conversion[currentPiece];
                previousTarget.textContent = '';
                boardData[previousCoord[1]][previousCoord[0]] = "noPiece";
                previousCoord = [];
                boardData[data[1]][data[0]] = currentPiece;
                console.log(boardData); // will be outputting this to the SERVER
                currentPiece = '';
                currentValidMoves = [];
                testMoveData = [];
                return
            }
        }

        console.log("not valid Space!");
        return
    }

    createTiles = (startTile, isPressed, rowNum, boardData) => {
        let currentTile = startTile;
        let tiles = []
        for (let i = 0; i < 8; i++) {
            tiles.push(
                <TileComponent key={[i, rowNum]} coord={[i, rowNum]} tile={currentTile} isPressed={this.move} piece={conversion[boardData[rowNum][i]]}/>
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
                {this.updateBoard(boardData)}

            </div>
        );
    }
}

export default BoardComponent;
