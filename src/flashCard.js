/* eslint-disable no-unused-vars */

export class FlashCard {
    constructor (userAnswer){
        this.userAnswer = userAnswer;
        this.timeLimit = 20;
        this.score = 0;
        this.correctAnswer = "camelCase";
    }

    setTimeLimit() {
        setInterval(() => {
        this.timeLimit--;
        }, 1000);
    }

    doYouHaveTimeLeft(){
        if (this.timeLimit > 0){
            return true;
        } else {
            return false;
        }
    }

    points(){
        if (this.correctAnswer === this.userAnswer){
            return this.score = 1 + this.score;
        } else{
            return this.score;
        }
    }

    nextQuestion(){
        this.timeLimit = 20;
    }
}