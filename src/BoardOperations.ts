import { BoardPiece } from "./BoardPiece";


export class BoardOperations
{

    flagNewSquare(flag: boolean, boardGrid: BoardPiece[][])
    {
        
    }


    flagCellTrue(x: number, y:number, boardGrid: BoardPiece[][]):void
    {
        boardGrid[x][y].isFlagged = true;
    }

    flagCellFalse(x: number, y:number, boardGrid: BoardPiece[][]):void
    {
        boardGrid[x][y].isFlagged = false;
    }
}