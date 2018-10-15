export class FlashCard {
    constructor (answer){
        this.answer = answer;
        this.timeLimit = 20;
        this.score = 0;
    }

    setTimeLimit() {
        setInterval(() => {
        this.timeLimit--;
        }, 1000);
    }
}