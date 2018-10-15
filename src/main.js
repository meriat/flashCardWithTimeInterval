import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashCard } from './flashCard.js';


$(document).ready(function () {
    let newFlashCard = new FlashCard();
    setInterval(() => {
        $("#timer").text(newFlashCard.timeLimit);
    }, 50);
    $("#firstOptionText").text(newFlashCard.answerOne);
    $("#firstOption").attr("value", newFlashCard.answerOne);
    $("#secondOptionText").text(newFlashCard.answerTwo);
    $("#secondOption").attr("value", newFlashCard.answerTwo);
    newFlashCard.setTimeLimit();


    $("#flashCardForm").submit(function (event) {
        event.preventDefault(); 
        
        let result = $('input[name="option"]:checked').val();
        newFlashCard.userAnswer.push(result);
        $("#score").text(newFlashCard.points());
        newFlashCard.nextQuestion();
    });
});
