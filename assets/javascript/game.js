// random number generated from 19-120
$(document).ready(function () {

    // random number to be shown at start of game from 19-120
    var randomNumber = Math.floor(Math.random() * 102) + 19;

    //create random number 1-12 for each crystal
    var num1 = Math.floor(Math.random() * 12) + 1;
    var num2 = Math.floor(Math.random() * 12) + 1;
    var num3 = Math.floor(Math.random() * 12) + 1;
    var num4 = Math.floor(Math.random() * 12) + 1;


    //storing score and total values here
    var totalScore = 0;
    var winCount = 0;
    var loseCount = 0;

    //appends the random number to html id.
    $("#RNG").text(randomNumber);

    // create a click function for each gem
    // assign random number to each click function
    // link gem number to the user score
    $("#blue-gem").on("click", function () {
        totalScore += num1;
        $("#score").text(totalScore);
        game()
    });
    $("#red-gem").on("click", function () {
        totalScore += num2;
        $("#score").text(totalScore);
        game()
    });
    $("#green-gem").on("click", function () {
        totalScore += num3;
        $("#score").text(totalScore);
        game()
    });
    $("#yellow-gem").on("click", function () {
        totalScore += num4;
        $("#score").text(totalScore);
        game()
    });


    // when user score is equal to gem total, you win
    function game() {
        if (totalScore === randomNumber) {
            winCount++;
            $("#Wins").text(winCount);
            console.log(winCount);
        } else (totalScore > randomNumber) {
            loseCount++;
            $("#Losses").text(loseCount);
        }
    }
    // when user score is greater than gem number, you lose
    // tally wins and loses



});
