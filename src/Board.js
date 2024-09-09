"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyBoardPiece_1 = require("./EmptyBoardPiece");
class Board {
    constructor() {
        this.boardGrid2 = new Array();
        this.boardGrid = [];
        this.width = 7;
        this.height = 7;
    }
    generateBoard() {
        for (let i = 0; i < this.height; i++) {
            this.boardGrid[i] = [];
            //this.boardGrid2.push(new Array<BoardPiece>());
            for (let j = 0; j < this.width; j++) {
                let emptyPiece = new EmptyBoardPiece_1.EmptyBoardPiece();
                this.boardGrid[i][j] = emptyPiece;
                //this.boardGrid2[i].push(new EmptyBoardPiece());
            }
        }
    }
    displayBoard() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                //this.boardGrid[i][j].display();
                console.log(this.boardGrid[i][j]);
            }
        }
    }
    displayBoardCell(x, y) {
        return this.boardGrid[x][y];
    }
}
let board = new Board();
board.generateBoard();
board.displayBoard();
