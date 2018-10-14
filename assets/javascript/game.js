
// random number generated from 19-120
$(document).ready(function () {

    // random number to be shown at start of game from 19-120
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    function resetNum() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#RNG").text(randomNumber);
    }

    function gemNum() {
       return Math.floor(Math.random() * 12) + 1;
    }
    var num1 = gemNum();
    var num2 = gemNum();
    var num3 = gemNum();
    var num4 = gemNum();

    //create random number 1-12 for each crystal
    function rng() {
    num1 = gemNum();
    num2 = gemNum();
    num3 = gemNum();
    num4 = gemNum();
    }

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
            $("#result").text("You Won!");
            $("#Wins").text(winCount);
            totalScore = 0;
            $("#score").text(totalScore);
            resetNum();
            rng();
        }    
    // when user score is greater than gem number, you lose
        else if (totalScore > randomNumber) {
            loseCount++;
            $("#result").text("You Lost!")
            $("#Losses").text(loseCount);
            totalScore = 0;
            $("#score").text(totalScore);
            resetNum();
            rng();
        } 
    }
    
    // tally wins and loses
    // create a reset function upon win/loss

});
