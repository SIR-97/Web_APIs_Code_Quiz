// set out my DOM variables as cross referenced from the index.html file

var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choiceEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var initialEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var startScreen = document.querySelector("#start-screen")
// click to start game 

startBtn.addEventListener("click", startGame)

function startGame(){
    console.log("started") // shows that game started in console

    // hide start button and start screen once the start button is selected 
    startBtn.classList.add("hide")
    startScreen.classList.add("hide")

    // uncovers questions page that is hidden 
    questionsEl.classList.remove("hide")


}

function setTimer(){

}

function setNextQuestion(){

}

function selectAnswer(){

}