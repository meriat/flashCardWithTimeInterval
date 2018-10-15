import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashCard } from './flashCard.js';


$(document).ready(function () {
    $("#flashCardForm").submit(function (event) {
        event.preventDefault(); 
        let newFlashCard = new FlashCard();
        let result = $('input[name="option"]:checked').val();
        newFlashCard.userAnswer.push(result);
        $("#score").text(newFlashCard.points());

    });
});
