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
    $("#blue-gem").on("click", function () {
        totalScore += num1;
        $("#score").text(totalScore);
    });
    $("#red-gem").on("click", function () {
        totalScore += num2;
        $("#score").text(totalScore);
    });
    $("#green-gem").on("click", function () {
        totalScore += num3;
        $("#score").text(totalScore);
    });
    $("#yellow-gem").on("click", function () {
        totalScore += num4;
        $("#score").text(totalScore);
    });

    
    // link gem number to the user score
    // when gem number is equal to 
    // tally wins and loses

});
