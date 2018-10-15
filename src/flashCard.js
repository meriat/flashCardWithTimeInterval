/* eslint-disable no-unused-vars */

export class FlashCard {
    constructor() {
        this.userAnswer = [];
        this.timeLimit = 20;
        this.score = 0;
        this.questionIndex = 0;
        this.correctAnswer = ["let", "const"];
        this.question = ["What word is used to declare a variable that changes in ES6?", "What word is used to declare a variable that does not change in ES6?"];
    }

    setTimeLimit() {
        this.timeLimit = 20;
        setInterval(() => {
            this.timeLimit--;
            if(this.doYouHaveTimeLeft())
            {
                clearInterval();
                this.nextQuestion()
                ;
            }
        }, 1000);
    }

    doYouHaveTimeLeft() {
        if (this.timeLimit > 0) {
            return true;
        } else {
            return false;
        }
    }

    points() {
        for (let i = 0; i < this.correctAnswer.length; i++) {
            if (this.correctAnswer[i] === this.userAnswer[i]) {
                return this.score = 1 + this.score;
            } else {
                return this.score;
            }
        }
    }

    nextQuestion() {
        this.questionIndex++;
        let thisQuestion = this.getQuestion(this.questionIndex);
        this.setTimeLimit();
        return thisQuestion;
    }

    getQuestion(index) {
        return this.question[index];
    }
}