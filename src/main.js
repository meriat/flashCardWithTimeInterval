import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashCard } from './flashCard.js';


$(document).ready(function () {
    let newFlashCard = new FlashCard();
    newFlashCard.setTimeLimit();
    setInterval(() => {
        $("#timer").text(newFlashCard.timeLimit);
    }, 50);

    $("#flashCardForm").submit(function (event) {
        event.preventDefault(); 
        
        let result = $('input[name="option"]:checked').val();
        let result2 = $('input[name="option2"]:checked').val();
        let result3 = $('input[name="option3"]:checked').val();
        newFlashCard.userAnswer.push(result);
        newFlashCard.userAnswer.push(result2);
        newFlashCard.userAnswer.push(result3);
        $('#score').empty();
        $("#score").text(newFlashCard.points());
        // newFlashCard.nextQuestion();
    });
});
