import React, { Component } from 'react';
import TileComponent from '../components/TileComponent';
import ButtonComponent from '../components/ButtonComponent';
import { createBrowserHistory } from 'history';
import { Link } from "react-router-dom";
import './board.css';
import { myConfig } from '../config.js';

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


let initialBoardData = [
    ["blackRook", "blackKnight", "blackBishop", "blackQueen", "blackKing", "blackBishop", "blackKnight", "blackRook"],
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


// NOTE: This will only work for one move right now, you will need a constant input of data to keep making moves
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
        //pieceName: "blackKing",
        // The coordinate the user would need to click on to select a piece
        //tileCoord: [4, 0],

        // all possible coordinates the user could clik on after selecting a piece
        possibleMoves: [[4, 0, 1, 0], [4, 0, 6, 0], [4, 0, 3, 0], [4, 0, 5, 0]]

        // all possible coordinates the user could click on that would cause a special move 
        //  (after selecting a piece)
        //tileThatCausesSpecialMove: [[1, 0], [6, 0]],


        //specialMove: [
        //    {
        //        // Link Special move coordinate to special move
        //        specialTile: [1, 0],

        //        // name of special move
        //        specialMoveType: "castling",

        //        // Data that holds coordinate changes for special move
        //        effectedTiles:[
        //            { tileCoord: [2, 0], newPiece: "blackRook" },
        //            { tileCoord: [1, 0], newPiece: "blackKing" },
        //            { tileCoord: [4, 0], newPiece: "noPiece" },
        //            { tileCoord: [0, 0], newPiece: "noPiece" }
        //        ]
        //    },

        //    {
        //        specialTile: [6, 0],
        //        specialMoveType: "castling",
        //        effectedTiles: [
        //            { tileCoord: [5, 0], newPiece: "blackRook" },
        //            { tileCoord: [6, 0], newPiece: "blackKing" },
        //            { tileCoord: [4, 0], newPiece: "noPiece" },
        //            { tileCoord: [7, 0], newPiece: "noPiece"}
        //        ]
        //    }
        //], 
    },
]


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




// TODO
// move these to state variables
// pass in the first board and set of moves from home to the board component
// connect the server logic to the UI logic
// ????
// profit
// put functions into modules/refactor
// sendboard is going to get back some info to detect en p, going to need to add logic for that


let currentValidMoves = { possibleMoves: [] };
let currentPiece = '';
let previousCoord = [];
let saveClickedCoord = [];
//let newPromotion = [];


class BoardComponent extends Component {
    constructor() {
        super();
        this.state = {
            freeze: false,
            isPromote: false,
            tileComponents: [],
            timeToSelect: true,
            timeToMove: false,
            turnIndication: "Your Turn",
            currentValidMoves: [],
            currentValidSelections: [],
            currentPiece: '',
            previousCoord: [],
            youWin: false,
            htmlPlayerColor: null,
            isCheck: false
        };
    }


    // need to conenct [0,0] selection key to [[0, 0], [0,0]].... movement values
    processMoveData = (serverMoveData) => {
        let processedMoveData = [] //[{ tileCoord: [-1, -1], possibleMoves :[] }];


        for (let i = 0; i < serverMoveData.length; i++) {

            let doesSelectionExist = false;
            let singularSelection = [];
            singularSelection.push(serverMoveData[i][1]);
            singularSelection.push(serverMoveData[i][0]);

            let importantSelection = {};

            // checks if we already added that selection
            for (let x = 0; x < processedMoveData.length; x++) {
                if (areArraysEqual(processedMoveData[x].tileCoord, singularSelection)) {
                    //console.log(processedMoveData[x].tileCoord);
                    //console.log(singularSelection);
                    importantSelection = processedMoveData[x];
                    doesSelectionExist = true;
                    break;
                }
            }


            // setups the singular move
            let singularMove = [];
            singularMove.push(serverMoveData[i][3]);
            singularMove.push(serverMoveData[i][2]);

            let pieceName = boardData[singularSelection[1]][singularSelection[0]];


            // if selection does not exists, push a new selection
            // if selection does exist push the move to the existing selection
            if (!doesSelectionExist) {
                importantSelection = { pieceName: pieceName, tileCoord: singularSelection, possibleMoves: [], tileThatCausesSpecialMove: [], specialMove: [], specialType: "", htmlBoard: null };
                importantSelection.possibleMoves.push(singularMove);
                processedMoveData.push(importantSelection);
            }
            else {
                importantSelection.possibleMoves.push(singularMove);
            }

        }
        return processedMoveData;
    }


    async componentDidMount() {
        this.defineWhiteOrBlack();
        if (this.props.location.state.playerNumber == 1) {
            //let selectionsAndMoves = this.processMoveData(this.props.startMoves);
            let selectionsAndMoves = this.processMoveData(this.props.location.state.startMoves);
            testMoveData = selectionsAndMoves;
        }
        else if (this.props.location.state.playerNumber == 2) {
            //this.makeMoveConnection(this.props.playerNumber);
            this.makeMoveConnection(this.props.location.state.playerNumber)
            this.endTurn();

        }
        let renderBoard = this.initBoard();
        this.setState({ htmlBoard: renderBoard });
    }


    endTurn = () => {
        this.state.freeze = true;
        this.setState({ turnIndication: "Not Your Turn"})
    }


    startTurn = () => {
        this.state.freeze = false;
        this.setState({ turnIndication: "Your Turn" })
    }


    async makeMove(moveData, isPromotion, promoteTo) {
        if (!this.state.freeze) {
           // console.log("PLAYER NUMBER: " + this.props.playerNumber);
            //this.state.freeze = true;
            this.endTurn();
            await this.sendBoard(this.props.location.state.playerNumber, moveData, promoteTo);
            await this.makeMoveConnection(this.props.location.state.playerNumber);
        }
        else {
            console.log("IT IS NOT YOUR TURN");
        }
    }


    async sendBoard(playerNumber, moveData, promoteTo) {
        // send board
        let data = null;
        data = { player_number: playerNumber, board: boardData, player_move: moveData, pawn_promotion: promoteTo };
        let newResponse = await fetch(myConfig.serverUrl + '/submitBoard', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        let newResponseJson = await newResponse.json();
        console.log("SEND BOARD RETURN vvvvvvv");
        console.log(newResponseJson);
        boardData = newResponseJson["board_data"];
        this.updateBoard();
    }


    async makeMoveConnection(playerNumber) {
        console.log("YOU HAVE JUST SEND OUT A WAIT RESPONSE FROM THE SERVER AND NOW YOU MUST WAIT");
        // send wait request
        let waitData = { player_number: playerNumber, player_move: [0, 0, 0, 0] };
        let waitForTurnResponse = await fetch(myConfig.serverUrl + '/waitForTurn', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(waitData) })

        let waitResponseJson = await waitForTurnResponse.json();
        console.log("YOU HAVE RECEIVED A RESPONSE FROM THE SERVER AND NOW IT IS YOUR TURN");
        console.log(waitResponseJson);

        boardData = waitResponseJson.board_data;

        await this.updateBoard();

        testMoveData = await this.processMoveData(waitResponseJson.move_data);

        await this.startTurn();

        if (waitResponseJson.is_check == true) {
            this.setState({ isCheck: true });
        }
        else {
            this.setState({ isCheck: false });
        }
        if (waitResponseJson.won == true) {
            console.log("???????");
            this.setState({ youWin: true })
            await this.noButtonquitgame();
            this.props.history.push(
                {
                    pathname: "/Final",
                    state: { result: "WON"}
                }
            );
            return;

        }
        if (waitResponseJson.lost == true || testMoveData.length == 0) {
            this.setState({ youWin: false })
            await this.noButtonquitgame();
            this.props.history.push(
                {
                    pathname: "/Final",
                    state: { result: "LOST" }
                }
            );
            return;
        }


    }


    quitGame = () => {
        console.log("FREEZE?: " + this.state.freeze);
        if (!this.state.freeze) {
            let playerNumber = this.props.location.state.playerNumber
            let data = { player_number: playerNumber };
            let newResponse = fetch(myConfig.serverUrl + '/quitGame', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }) // add await?
        }
    }

    async noButtonquitgame() {
        let playerNumber = this.props.location.state.playerNumber
        let data = { player_number: playerNumber };
        let newResponse = await fetch(myConfig.serverUrl + '/quitGame', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }) // add await?
    }



    clearMoveData = () => {
        previousCoord = [];
        currentPiece = '';
        saveClickedCoord = [];
        currentValidMoves.possibleMoves = [];
        testMoveData = [];
        //console.log(testMoveData);
    }


    selectPiece = (event, clickedCoord) => {
        let isValidSpace = false;
        for (let i = 0; i < testMoveData.length; i++) {
            if (areArraysEqual(clickedCoord, testMoveData[i].tileCoord)) {
                this.turnAllHighlightsOff();
                this.state.tileComponents[clickedCoord[1]][clickedCoord[0]].current.highlightOn();
                //console.log("valid SPACE!");
                previousCoord = testMoveData[i].tileCoord;
                currentValidMoves = testMoveData[i];
                currentPiece = testMoveData[i].pieceName;
                isValidSpace = true;

                this.highlightMoveData(currentValidMoves.possibleMoves);
                return isValidSpace;
            }
        }
        //this.turnAllHighlightsOff();
        //console.log("invalid selection");
        return isValidSpace;
    }


    highlightMoveData = (possibleMoves) => {
        //console.log(possibleMoves);
        for (let i = 0; i < possibleMoves.length; i++) {
            this.state.tileComponents[possibleMoves[i][1]][possibleMoves[i][0]].current.highlightOn();
        }
    }


    turnAllHighlightsOff = () => {
        for (let rowNum = 0; rowNum < 8; rowNum++) {
            for (let colNum = 0; colNum < 8; colNum++) {
                this.state.tileComponents[rowNum][colNum].current.highlightOff();
            }
        }
    }


    // async selectMovement = (clickedCoord) =>
    async selectMovement(clickedCoord) {
        let vanillaMoves = currentValidMoves.possibleMoves;
        for (let x = 0; x < vanillaMoves.length; x++) {
            if (areArraysEqual(clickedCoord, vanillaMoves[x])) {

                let tilesThatCauseSpecialMove = currentValidMoves.tileThatCausesSpecialMove;
                //console.log(tilesThatCauseSpecialMove);


                if (doesTwoDInclude(tilesThatCauseSpecialMove, clickedCoord)) {
                    //console.log("SPECIAL MOVE");
                    this.clearMoveData();
                }
                else {
                    console.log("made a move!");
                    this.turnAllHighlightsOff();
                    console.log(clickedCoord);
                    saveClickedCoord = clickedCoord
                    if ((clickedCoord[1] == 0) && (currentPiece == "whitePawn")) {
                        console.log("WHITE PROMOTION");
                        this.setState({ isPromote: true });
                        // changes the core board data
                        boardData[previousCoord[1]][previousCoord[0]] = "noPiece";
                        boardData[clickedCoord[1]][clickedCoord[0]] = currentPiece;

                        // actually changes the image
                        this.updateBoard();
                        return;
                    }

                    else if ((clickedCoord[1] == 7) && (currentPiece == "blackPawn")) {
                        console.log("BLACK PROMOTION");
                        this.setState({ isPromote: true });
                        // changes the core board data
                        boardData[previousCoord[1]][previousCoord[0]] = "noPiece";
                        boardData[clickedCoord[1]][clickedCoord[0]] = currentPiece;

                        // actually changes the image
                        this.updateBoard();
                        return;
                    }                   

                    // changes the core board data
                    boardData[previousCoord[1]][previousCoord[0]] = "noPiece";
                    boardData[clickedCoord[1]][clickedCoord[0]] = currentPiece;

                    // actually changes the image
                    this.updateBoard();

                    // prepare for server using meta data
                    let sendToServerMove = [previousCoord[1], previousCoord[0], clickedCoord[1], clickedCoord[0]]

                    //clears meta board data
                    this.clearMoveData();

                    // send to server
                    await this.makeMove(sendToServerMove, false, '');


                }
                //this.state.isSelect = true;
                return
            }
        }
        console.log("invalid choice");
        return;
    }


    moveLogic = (event, clickedCoord) => {
        if (!this.state.freeze) {
            if (this.selectPiece(event, clickedCoord)) {
                return;
            }
            else {
                this.selectMovement(clickedCoord);
            }
        }


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


    resetBoard = () => {
        for (let rowNum = 0; rowNum < initialBoardData.length; rowNum++) {
            for (let colNum = 0; colNum < initialBoardData[rowNum].length; colNum++) {
                boardData[rowNum][colNum] = initialBoardData[rowNum][colNum]
            }
        }
    }


    initBoard = () => {

        this.resetBoard();

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


    promoteKnight = () => {
        console.log("Promoted to Knight!");
        //newPromotion = [10, 10];
        this.setState({ isPromote: false }); // setup await? lookout for this, sketchyy...
        this.promotionMove("knight");
    }


    promoteBishop = () =>  {
        console.log("Promoted to Bishop!");
        //newPromotion = [20, 20];
        this.setState({ isPromote: false }); // setup await? lookout for this, sketchyy...
        this.promotionMove("bishop");
    }


    promoteRook = () =>  {
        console.log("Promoted to Rook!");
        //newPromotion = [30, 30];
        this.setState({ isPromote: false }); // setup await? lookout for this, sketchyy...
        this.promotionMove("rook");
    }


    promoteQueen = () =>  {
        console.log("Promoted to Queen!");
        //console.log(this.state);
        //newPromotion = [40, 40];
        this.setState({ isPromote: false }); // setup await? lookout for this, sketchyy...
        this.promotionMove("queen"); // setup await? lookout for this, sketchyy...
    }


    async promotionMove(newPromotion) {
        // prepare for server using meta data
        let sendToServerMove = [previousCoord[1], previousCoord[0], saveClickedCoord[1], saveClickedCoord[0]]

        //clears meta board data
        this.clearMoveData();

        // send to server
        await this.makeMove(sendToServerMove, true, newPromotion);
    }

    defineWhiteOrBlack = () => {
        let label = []
        if (this.props.location.state.playerNumber == 1) {
            label.push( <h2 className="youAre">YOU ARE WHITE</h2>);
        }
        else {
            label.push(<h2 className="youAre">YOU ARE BLACK</h2>);
        }
        this.setState({ htmlPlayerColor: label });
    }

    // TODO turn the link into a div and turn into css rather than button 
    render() {
        return (
            <div>
                <h1>YOU ARE INSIDE THE GAME</h1>
                {this.state.htmlPlayerColor}
                {
                    this.state.isCheck
                        ?<h2>YOU ARE IN CHECK</h2>
                        :<h2></h2>
                }
                <h2>{this.state.turnIndication}</h2>
                {this.state.htmlBoard}
                <div>
                    {
                        this.state.isPromote
                            ? <div>
                                <p>SELECT PIECE TO PROMOTE TO</p>
                                <table className="promotion">
                                <tbody>
                                        <tr className="promotionTr">
                                            <th className="promotionTh" onClick={this.promoteKnight}>KNIGHT</th>
                                            <th className="promotionTh" onClick={this.promoteBishop}>BISHOP</th>
                                            <th className="promotionTh" onClick={this.promoteRook}>ROOK</th>
                                            <th className="promotionTh" onClick={this.promoteQueen}>QUEEN</th>
                                        </tr >
                                </tbody>
                                </table>
                                </div>
                            :<h1></h1>
                    }

                    {
                        this.state.freeze

                            ? <h2>Waiting For Player...</h2>

                            : <Link to={{
                                pathname: "/Final",
                                state: { result: "LOST" },
                            }} onClick={this.quitGame} disabled={this.state.freeze}>
                                <ButtonComponent
                                    label={"Quit"}
                                    disabled={this.state.freeze}
                                />
                            </Link>
                    }




                </div>
            </div>
            
        );
    }


}

export default BoardComponent;
