import { BoardPiece } from "./BoardPiece";
import { EmptyBoardPiece } from "./EmptyBoardPiece";

class Board
{
    public boardGrid: BoardPiece[][];
    public boardGrid2: Array<Array<BoardPiece>> = new Array();

    public width: number;
    public height: number;

    constructor()
    {
        this.boardGrid = [];
        this.width = 7;
        this.height = 7;
    }

    public generateBoard(): void
    {
        for(let i: number = 0; i<this.height; i++)
        {
            this.boardGrid[i] = [];
            //this.boardGrid2.push(new Array<BoardPiece>());

            for(let j = 0; j<this.width; j++)
            {
                let emptyPiece: EmptyBoardPiece = new EmptyBoardPiece();
                this.boardGrid[i][j] = emptyPiece;

                //this.boardGrid2[i].push(new EmptyBoardPiece());
            }
        }
    }

    public displayBoard(): void
    {
        for(let i: number = 0; i<this.height; i++)
            {
                for(let j = 0; j<this.width; j++)
                {
                    //this.boardGrid[i][j].display();
                    console.log(this.boardGrid[i][j]);
                }
            }
    }

    public displayBoardCell(x: number, y: number): BoardPiece
    {
        return this.boardGrid[x][y];
    }

    public addMines():void
    {
        
    }
}


let board: Board = new Board();
board.generateBoard();
board.displayBoard();




