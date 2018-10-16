import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashCard } from './flashCard.js';



$(document).ready(function () {
    let mood = 'waiting';
    // $("#waiting").show();
    callApi();
    function callApi() {
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/random?api_key=pq4bbnDfNiufadbSHigllyqkIC228kfb&tag=${mood}&rating=G`,
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function (response) {
                mood = $('#waiting').append(`<img src=${response.data.images.fixed_height_downsampled.url} alt="some random gif">`);
                console.log("Boo!");
                $("#timer").text("");
                $("#timer").append(`<img src=${response.data.images.fixed_height_downsampled.url} alt="some random gif">`);
    
            },
            error: function () {
                $('#errors').text("there was an error processing your request. Please try again!!!!");
            }
        });
    }

    var checkGame = setInterval(function () {
        // if(mood == "waiting"){
        //     mood = "gameover";
        // }
        if (newFlashCard.gameOverState()) {
            mood = "gameover";
            $("#timer").text("");
            callApi();
            $("#waiting").hide();
            clearInterval(checkGame);
        }
    }, 500);


    $("#timer").show();

    let newFlashCard = new FlashCard();
    newFlashCard.setTimeLimit();
    setInterval(() => {
        if (!newFlashCard.gameOverState()) {

            $("#timer").text(newFlashCard.timeLimit);
        }

        // if(newFlashCard.gameOverState()){
        //     $("#timer").append(`<img src=${response.data.images.fixed_height_downsampled.url} alt="some random gif">`);
        // }
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
