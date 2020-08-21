import React, { Component } from 'react';
import TileComponent from '../components/TileComponent';
import ButtonComponent from '../components/ButtonComponent';
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


// these variables permeate
//let initialBoardData = [
//    ["blackRook", "blackKnight", "blackBishop", "blackQueen", "blackKing", "blackBishop", "blackKnight", "blackRook"],
//    ["blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn"],
//    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
//    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
//    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
//    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
//    ["whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn"],
//    ["whiteRook", "whiteKnight", "whiteBishop", "whiteQueen", "whiteKing", "whiteBishop", "whiteKnight", "whiteRook"]
//]

let initialBoardData = [
    ["blackRook", "noPiece", "noPiece", "noPiece", "blackKing", "noPiece", "noPiece", "blackRook"],
    ["blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece", "noPiece"],
    ["whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn"],
    ["whiteRook", "whiteKnight", "whiteBishop", "whiteQueen", "whiteKing", "whiteBishop", "whiteKnight", "whiteRook"]
]


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


let testMoveData = [
    {
        pieceName: "blackPawn",
        tileCoord: [0, 1],
        possibleMoves: [[0, 2], [0, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [1, 1],
        possibleMoves: [[1, 2], [1, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [2, 1],
        possibleMoves: [[2, 2], [2, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [3, 1],
        possibleMoves: [[3, 2], [3, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [4, 1],
        possibleMoves: [[4, 2], [4, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [5, 1],
        possibleMoves: [[5, 2], [5, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [6, 1],
        possibleMoves: [[6, 2], [6, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    {
        pieceName: "blackPawn",
        tileCoord: [7, 1],
        possibleMoves: [[7, 2], [7, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    // Example of castling
    {
        pieceName: "blackKing",
        // The coordinate the user would need to click on to select a piece
        tileCoord: [4, 0],

        // all possible coordinates the user could clik on after selecting a piece
        possibleMoves: [[1, 0], [6, 0], [3, 0], [5, 0]],

        // all possible coordinates the user could click on that would cause a special move 
        //  (after selecting a piece)
        tileThatCausesSpecialMove: [[1, 0], [6, 0]],


        specialMove: [
            {
                // Link Special move coordinate to special move
                specialTile: [1, 0],
                // name of special move
                specialMoveType: "castling",
                // Data that holds coordinate changes for special move
                effectedTiles:[
                    { tileCoord: [2, 0], newPiece: "blackRook" },
                    { tileCoord: [1, 0], newPiece: "blackKing" },
                    { tileCoord: [4, 0], newPiece: "noPiece" },
                    { tileCoord: [0, 0], newPiece: "noPiece" }
                ]
            },

            {
                specialTile: [6, 0],
                specialMoveType: "castling",
                effectedTiles: [
                    { tileCoord: [5, 0], newPiece: "blackRook" },
                    { tileCoord: [6, 0], newPiece: "blackKing" },
                    { tileCoord: [4, 0], newPiece: "noPiece" },
                    { tileCoord: [7, 0], newPiece: "noPiece"}
                ]
            }
        ], 
    },

    // Example of piece with no special moves
    {
        pieceName: "blackPawn",
        tileCoord: [7, 1],
        possibleMoves: [[7, 2], [7, 3]],
        tileThatCausesSpecialMove: [],
        specialMove: [],
        specialType: ""
    },

    // Example of piece promotion
    {
        pieceName: "whitePawn",
        tileCoord: [0, 0],
        possibleMoves: [[0, 0]],
        tileThatCausesSpecialMove: [[0, 0]],
        specialMove: [],
        specialType: "promotion"
    }
]

let currentValidMoves = [];
let currentPiece = '';
let previousTarget = null;
let previousCoord = [];

function doesTwoDInclude(twoarr, arr) {
    for (let i = 0; i < twoarr.length; i++) {
        if (areArraysEqual(twoarr[i], arr)) {
            return true;
        }
    }
    return false;
}

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
    constructor() {
        super();
        this.state = { freeze: false , tileComponents: []};
    }

    makeMove = () => {
        if (!this.state.freeze) {
            console.log("PLAYER NUMBER: " + this.props.playerNumber);
            this.state.freeze = true;
            this.makeMoveConnection(this.props.playerNumber);
        }
        else {
            this.state.tileComponents[0][1].current.setPiece(whiteRook);
            console.log("IT IS NOT YOUR TURN");
        }
    }


    //testing connection
    async makeMoveConnection(playerNumber) {
        // send board
        let data = { player_number: playerNumber, board: boardData};
        let newResponse = await fetch('http://127.0.0.1:5000/submitBoard', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })

        // send wait request
        let waitData = { player_number: playerNumber };
        let waitForTurnResponse = await fetch('http://127.0.0.1:5000/waitForTurn', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(waitData) })

        let waitResponseJson = await waitForTurnResponse.json();

        console.log(waitResponseJson);
        this.state.freeze = false;

    }


    moveLogic = (event, clickedCoord) => {
        // logic for selecting correct piece
        for (let i = 0; i < testMoveData.length; i++)
        {
            if (areArraysEqual(clickedCoord, testMoveData[i].tileCoord)) {
                console.log("valid SPACE!");
                previousTarget = event.target;
                previousCoord = testMoveData[i].tileCoord;
                //currentValidMoves = testMoveData[i].possibleMoves;
                currentValidMoves = testMoveData[i];
                currentPiece = testMoveData[i].pieceName;
                return
            }
        }


        // selecting valid tile, updating css, and sending new board

        let vanillaMoves = currentValidMoves.possibleMoves;

        for (let x = 0; x < vanillaMoves.length; x++) {
            if (areArraysEqual(clickedCoord, vanillaMoves[x])) {

                let tilesThatCauseSpecialMove = currentValidMoves.tileThatCausesSpecialMove;
                console.log( tilesThatCauseSpecialMove);


                if (doesTwoDInclude(tilesThatCauseSpecialMove, clickedCoord)) {
                    console.log("SPECIAL MOVE");   
                }
                else {
                    console.log("made a move!");

                    // changes the core board data
                    boardData[previousCoord[1]][previousCoord[0]] = "noPiece";
                    boardData[clickedCoord[1]][clickedCoord[0]] = currentPiece;

                    // outputToServer
                    console.log(boardData);

                    // actually changes the image
                    this.updateBoard();

                    // clears move data
                    previousCoord = [];
                    currentPiece = '';
                    currentValidMoves = [];
                    testMoveData = [];
                }

                return
            }
        }

        console.log("not valid Space!");
        return
    }


    createTiles = (startTile, isPressed, rowNum, boardData) => {
        let currentTile = startTile;
        let tiles = []
        let refs = [];

        for (let i = 0; i < 8; i++) {
            let tileRef = React.createRef();
            refs.push(tileRef);
            tiles.push(
                <TileComponent ref={tileRef} key={[i, rowNum]} coord={[i, rowNum]} tile={currentTile} isPressed={this.moveLogic} piece={conversion[boardData[rowNum][i]]}/>
            )
            if (currentTile == "grayTile") {
                currentTile = "blackTile";
            }
            else {
                currentTile = "grayTile";
            }
        }

        this.state.tileComponents.push(refs);
        return tiles;
    }


    initBoard = () => {

        // resets board
        for (let rowNum = 0; rowNum < initialBoardData.length; rowNum++) {
            for (let colNum = 0; colNum < initialBoardData[rowNum].length; colNum++) {
                boardData[rowNum][colNum] = initialBoardData[rowNum][colNum]
            }
        }

        let table = []
        let rows = []
        let startTile = "grayTile";

        for (let i = 0; i < 8; i++) {
            let rowOfTiles = this.createTiles(startTile, this.props.isPressed, i, boardData);
            rows.push(<tr key={i}>{rowOfTiles}</tr>)
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


    updateBoard = () => {
        for (let rowNum = 0; rowNum < 8; rowNum++) {
            for (let colNum = 0; colNum < 8; colNum++) {
                this.state.tileComponents[rowNum][colNum].current.setPiece(conversion[boardData[rowNum][colNum]]);
            }
        }
    }


    render() {
        return (
            <div>
                {this.initBoard()}
                <div>
                    <ButtonComponent
                        label={"PSEUDO MOVE"}
                        isPressed={this.makeMove}
                    />
                </div>
            </div>
            
        );
    }


}

export default BoardComponent;
