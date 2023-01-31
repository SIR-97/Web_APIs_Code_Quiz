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

 // shows the question on the screen after start button is clicked on
  titleEl.innerText = showQuestion.question 


  //shows the possible answers 
  showQuestion.choices.forEach(choice => {
    const button = document.createElement("button") // created a button within the choices class
    button.innerText = choice.text
    button.classList.add("btn")
    if (choice.correct){
        button.dataset.correct = choice // log the correct value as choice is a string and not boolean value
    }
    button.addEventListener("click", selectAnswer)
    choiceEl.appendChild(button)
  } )
}


function setTimer(){

}



function selectAnswer(){

}

// created my questions on the fundementals of JavaScript 

const questions = [

    {   question: "what is JavaScript?",
        choices: [ {text: "a programming software", correct: true }, {text: "a document", correct: false}]
    }

]