"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyBoardPiece_1 = require("./EmptyBoardPiece");
const GridLabelBoardPiece_1 = require("./GridLabelBoardPiece");
const MineBoardPiece_1 = require("./MineBoardPiece");
const BoardSettings_1 = require("./BoardSettings");
class Board {
    constructor() {
        this.boardGrid2 = new Array();
        this.boardSettings = new BoardSettings_1.BoardSettings();
        this.boardGrid = [];
        this.width = 7;
        this.height = 7;
    }
    generateBoard() {
        for (let i = 0; i < this.height; i++) {
            this.boardGrid[i] = [];
            //this.boardGrid2.push(new Array<BoardPiece>());
            for (let j = 0; j < this.width; j++) {
                if (i == 0) {
                    let gridLabel = new GridLabelBoardPiece_1.GridLabelBoardPiece();
                    gridLabel.icon = String.fromCharCode(96 + j) + "         ";
                    if (j <= 0)
                        gridLabel.icon = "     ";
                    this.boardGrid[i][j] = gridLabel;
                }
                else if (j == 0) {
                    let gridLabel = new GridLabelBoardPiece_1.GridLabelBoardPiece();
                    gridLabel.icon = i.toString();
                    if (i <= 0)
                        gridLabel.icon = "   ";
                    this.boardGrid[i][j] = gridLabel;
                }
                else {
                    let emptyPiece = new EmptyBoardPiece_1.EmptyBoardPiece();
                    this.boardGrid[i][j] = emptyPiece;
                }
                //this.boardGrid2[i].push(new EmptyBoardPiece());
            }
        }
    }
    displayBoard() {
        for (let i = 0; i < this.height; i++) {
            let row = "";
            for (let j = 0; j < this.width; j++) {
                //this.boardGrid[i][j].display();
                row += this.boardGrid[i][j].display();
                // this.boardGrid[i][j].display();
            }
            console.log(row);
            console.log("");
        }
    }
    displayBoardCell(x, y) {
        this.boardGrid[x][y].display();
        return this.boardGrid[x][y];
    }
    addMines() {
        for (let i = 0; i < this.boardSettings.numberOfMines; i++) {
            let randomX = this.getRandomIntInclusive(1, this.width - 1);
            let randomY = this.getRandomIntInclusive(1, this.height - 1);
            if (this.boardGrid[randomX][randomY].type == "null") {
                let newMine = new MineBoardPiece_1.MineBoardPiece();
                this.boardGrid[randomX][randomY] = newMine;
            }
            else {
                --i;
            }
        }
    }
    getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
}
let board = new Board();
board.generateBoard();
board.displayBoard();
board.addMines();
board.displayBoard();
//InputMenu.PlayerActionInputMenu();
