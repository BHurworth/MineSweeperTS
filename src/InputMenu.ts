const readline = require('node:readline/promises');

export class InputMenu
{
    public static async PlayerActionInputMenu(): Promise<number>
    {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        try
        {
            const answer: string = await rl.question('What do you want to do?', (answer: string) => {
            });
                let answerAsInt: number = parseInt(answer);
                switch(answerAsInt) {
                case 1:
                    console.log('Super! 1');
                    break;
                case 2:
                    console.log('Ok 2');
                    break;
                default:
                    console.log('Invalid answer!');
                }
                rl.close();
                return answerAsInt;
            }
            
        catch(error)
        {
            console.log(error);
        }

        return 2;
    }
}