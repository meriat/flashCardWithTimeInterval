import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashCard } from './flashCard.js';


$(document).ready(function () {
    $("#waiting").show();
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/random?api_key=hjK0Bz4npyo60C0xlHhhwcSqDKMzDkSr&tag=waiting&rating=G`,
        type: 'GET',
        data: {
            format: 'json'
        },
        success: function(response){
            $('#waiting').append(`<img src=${response.data.images.fixed_height_downsampled.url} alt="some random gif">`);
        },
        error: function(){
            $('#errors').text("there was an error processing your request. Please try again!!!!");
        }
    });

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
    });
});
