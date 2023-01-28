// set out my DOM variables as cross referenced from the index.html file

var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choiceEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var initialEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var startScreen = document.querySelector("#start-screen")

// variables regarding the quiz

let shuffledQuestions, currentQuestionIndex 

// click to start game 

startBtn.addEventListener("click", startGame)

function startGame(){
    console.log("started") // shows that game started in console

    // hide start button and start screen once the start button is selected 
    startBtn.classList.add("hide")
    startScreen.classList.add("hide")

    // allows the questions to appear randomly
    shuffledQuestions = questions.sort(() => Math.random - .5) 
    currentQuestionIndex = 0

    // uncovers questions page that is hidden 
    questionsEl.classList.remove("hide")
    setNextQuestion()

}

function setTimer(){

}

function setNextQuestion(){

    showQuestion(shuffledQuestions[currentQuestionIndex])

}

// create function that shows questions
function showQuestion(question){
    questionsEl.innertext = question.question
}

function selectAnswer(){

}

// created my questions on the fundementals of JavaScript 

var questions = [
    {
        question: "what is JavaScript?",
        answers: [
            {text: "a programming software", correct: true },
            {text: "a document", correct: false},

        ]
    }

]