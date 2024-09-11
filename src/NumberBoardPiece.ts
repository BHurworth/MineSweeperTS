import { BoardPiece } from "./BoardPiece";

export class NumberBoardPiece extends BoardPiece
{
    constructor()
    {
        super();
        this.type = "number";
    }
}