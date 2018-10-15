/* eslint-disable no-unused-vars */

export class FlashCard {
    constructor() {
        this.userAnswer = [];
        this.timeLimit = 20;
        this.score = 0;
        this.questionIndex = 0;
        this.correctAnswer = ["camelCase", "const"];
        this.question = ["What word is used to declare a variable that changes in ES6?", "What word is used to declare a variable that does not change in ES6?"];
    }

    setTimeLimit() {
        this.timeLimit = 20;
        setInterval(() => {
            this.timeLimit--;
            if(this.doYouHaveTimeLeft())
            {
                clearInterval();
                this.nextQuestion();
                
            }
        }, 1000);
    }

    getTimeLimit() {
        return this.timeLimit;
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
                this.score = 1 + this.score;
            }
        }
        return this.score;
    }

    nextQuestion() {
        this.questionIndex++;
        let thisQuestion = this.getQuestion(this.questionIndex);
        this.setTimeLimit();
        return thisQuestion;
    }

    getQuestion(index) {
        this.question[this.questionIndex];
        return this.question[index];
    }
}