/* eslint-disable no-unused-vars */

export class FlashCard {
    constructor() {
        this.userAnswer = [];
        this.timeLimit = 20;
        this.score = 0;
        this.questionIndex = 0;
        this.answerObjects = [
            {
                first: "const",
                second: "let"
            },
            {
                first: "const",
                second: "let"
            }
        ]
        this.answerOne = this.answerObjects[this.questionIndex].first;
        this.answerTwo = this.answerObjects[this.questionIndex].second;
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
                this.nextQuestion();
                
            }
        }, 1000);
    }

    getTimeLimit() {
        return this.timeLimit;
    }

    doYouHaveTimeLeft() {
        if (this.timeLimit < 1) {
            return true;
        } else {
            return false;
        }
    }

    points() {
            if (this.correctAnswer[this.questionIndex] === this.userAnswer[this.questionIndex]) {
                this.score = 1 + this.score;
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