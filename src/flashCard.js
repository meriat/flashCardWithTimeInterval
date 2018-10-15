const correctAnswer = "camelCase";

export class FlashCard {
    constructor (userAnswer){
        this.userAnswer = userAnswer;
        this.timeLimit = 20;
        this.score = 0;
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

    score(){
        if (correctAnswer === this.userAnswer){
            return this.score ++;
        } else{
            return this.score;
        }
    }

    nextQuestion(){
        this.timeLimit = 20;
    }
}