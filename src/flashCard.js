/* eslint-disable no-unused-vars */

export class FlashCard {
    constructor() {
        this.userAnswer = [];
        this.timeLimit = 5;
        this.score = 0;
        this.questionIndex = 0;
        this.correctAnswer = ["let", "Australia", "const"];
        this.currentInterval;
    }

    setTimeLimit() {
        this.timeLimit = 5;
        this.currentInterval = setInterval(() => {
            this.timeLimit--;
            if(this.gameOverState())
            {
                clearInterval(this.currentInterval);
                // alert("game over");
            }
        }, 1000);
    }

    gameOverState() {
        if (this.timeLimit < 1) {
            this.timeLimit = 0;
            return true;
        } else {
            return false;
        }
    }

    points() {
        for(let i=0;i< this.correctAnswer.length; i++){
            if (this.correctAnswer[i] === this.userAnswer[i]) {
                this.score = 1 + this.score;
            }
        }
            
            return this.score;
        }

}