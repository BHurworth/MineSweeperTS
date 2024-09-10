export abstract class BoardPiece
{
         icon: string = "    []    ";
         type: string = "null"
         visible: boolean = false;
         isFlagged:boolean = false;

         display(): string{
            //console.log("    []   ")
            return this.icon;
         };
}