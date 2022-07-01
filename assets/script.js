const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})




function startGame(){
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}


function setNextQuestion(){
    resetState()
    showQuestion (shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){


      nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add ('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')
 
}




const questions = [
    {
     question: "what is 1 * 2?",
     answers:  [
        {text: "12", correct: false},
        {text: "21", correct: false},
        {text: "2", correct: true},
        {text: "3", correct: false},
     ]
    },
    {
        question: "what is 2 + 2?",
        answers:  [
            {text: "40", correct: false},
            {text: "4", correct: true},
           {text: "22", correct: false},
           {text: "-2", correct: false},
           
        ]
    },
    {
        question: "what is 4 + 4?",
        answers:  [
           {text: "44", correct: false},
           {text: "2", correct: false},
           {text: "-8", correct: false},
           {text: "8", correct: true},
        ]
    },
    {
        question: "what is 8 - 8?",
        answers:  [
           {text: "0", correct: true},
           {text: "88", correct: false},
           {text: "16", correct: false},
           {text: "-8", correct: false},
        ]
    },
    {
        question: "what is 16 + 16?",
        answers:  [
           {text: "1616", correct: false},
           {text: "32", correct: true},
           {text: "12", correct: false},
           {text: "12", correct: false},
        ]
    },
]


var timer = 45
var timerInterval
var quizTimer = document.getElementById("timer");
startButton.addEventListener("click", startTimer);
function startTimer(){
timerInterval = setInterval(function() {
    timer--;
    quizTimer.textContent = "Time left: " + timer;

    if(timer === 0) {
      clearInterval(timerInterval);
      showScore();
      location.reload()
      
    }
    
  }, 1000);
}
