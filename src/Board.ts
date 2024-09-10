import { BoardPiece } from "./BoardPiece";
import { EmptyBoardPiece } from "./EmptyBoardPiece";
import { InputMenu } from "./InputMenu";
import { GridLabelBoardPiece } from "./GridLabelBoardPiece";

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

                if(i == 0)
                {
                    let gridLabel: GridLabelBoardPiece = new GridLabelBoardPiece();
                    gridLabel.icon =  String.fromCharCode(96+j) + "         ";
                    if(j<=0)
                        gridLabel.icon = "     ";
                    this.boardGrid[i][j] = gridLabel;
                    
                }

                else if(j == 0)
                {
                    let gridLabel: GridLabelBoardPiece = new GridLabelBoardPiece();
                    gridLabel.icon = i.toString();
                    if(i <=0)
                        gridLabel.icon = "   ";
                    this.boardGrid[i][j] = gridLabel;   
                }


                else
                {
                    let emptyPiece: EmptyBoardPiece = new EmptyBoardPiece();
                    this.boardGrid[i][j] = emptyPiece;
                }
                //this.boardGrid2[i].push(new EmptyBoardPiece());
            }
        }
    }

    public displayBoard(): void
    {
        for(let i: number = 0; i<this.height; i++)
            {
                
                let row: string = "";
                for(let j = 0; j<this.width; j++)
                {
                    //this.boardGrid[i][j].display();
                    row+= this.boardGrid[i][j].display();
                   // this.boardGrid[i][j].display();
                }
                console.log(row);
                console.log("");
            }
    }

    public displayBoardCell(x: number, y: number): BoardPiece
    {
        this.boardGrid[x][y].display();
        return this.boardGrid[x][y];
    }

    public addMines():void
    {
        
    }

     getRandomIntInclusive(min:number, max:number):number {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
      }
      
}

let board: Board = new Board();
board.generateBoard();
board.displayBoard();
InputMenu.PlayerActionInputMenu();




