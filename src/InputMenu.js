"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMenu = void 0;
const readline = require('node:readline/promises');
class InputMenu {
    static PlayerActionInputMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            try {
                const answer = yield rl.question('What do you want to do?', (answer) => {
                });
                let answerAsInt = parseInt(answer);
                switch (answerAsInt) {
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
            catch (error) {
                console.log(error);
            }
            return 2;
        });
    }
}
exports.InputMenu = InputMenu;
