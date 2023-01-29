// set out my DOM variables as cross referenced from the index.html file

var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var titleEl = document.querySelector("#question-title");
var choiceEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var initialEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var startScreen = document.querySelector("#start-screen")

// variables regarding the quiz

let currentQuestionIndex = 0 

// click to start game 

startBtn.addEventListener("click", startGame)

function startGame(){
    console.log("started") // shows that game started in console

    // hide start button and start screen once the start button is selected 
    startBtn.classList.add("hide")
    startScreen.classList.add("hide")

    // uncovers questions page that is hidden 
    questionsEl.classList.remove("hide")
    setNextQuestion()

}

function setNextQuestion(){

 var showQuestion = questions[currentQuestionIndex]
 titleEl.textContent = showQuestion.title
 questionsEl.textContent = showQuestion.question
}


function setTimer(){

}



function selectAnswer(){

}

// created my questions on the fundementals of JavaScript 

var questions = [
    {
        title: 'Question ',
        question: "what is JavaScript?",
        choices: [
            {text: "a programming software", correct: true },
           {text: "a document", correct: false},
       ]
    }

]