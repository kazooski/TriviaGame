// Harry Potter Trivia

//Object of questions and answers

var trivia = [
    {
        question: "Why would you Cast Alohomora?",
        answers: {
          a: "Unlock a door",
          b: "Throw something",
          c: "Fly",
          d: "Teleport"
        },
        correctAnswer: "a"
      },
      {
        question: "Catching what object ends a Quiddich match?",
        answers: {
          a: "A cold",
          b: "Quaffle",
          c: "Snitch",
          d: "Bludger"
        },
        correctAnswer: "c"
      },
];

// intial load of information with instructions
function initialLoad () {

    $("#query-box").text("We're on our way to Hogwarts! Let's grab some Pumpkin Pasties and see if we studied enough this summer.")
    // create start button under buttons-box to start playing
    var startButton = $("<div>");
    startButton.attr("id", "button2");
    startButton.text("Start");
    $("#buttons-box").append(startButton);
};

// create timer 15 sec per question
function questionTimer () {

}
// show timer in H1 element
// display first question
// create four buttons for the four options
// create attributes for four questions - one should be correct or true
// if correct, 
    // remove buttons
    // show correct font for 1 second
    // move onto the next question
//if incorrect,
    //remove buttons
    // show incorrect font for  1 second
    // move onto the next question
// once complete show score out total
// also display try again button that will function like the start button
initialLoad ();