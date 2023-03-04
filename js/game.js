const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '420',
        answer: 2,
    },
    {
        question: 'What is 3 + 3?',
        choice1: '69',
        choice2: '420',
        choice3: '6',
        choice4: '1',
        answer: 3,
    },
    {
        question: 'What is 4 + 4?',
        choice1: '6',
        choice2: '8',
        choice3: '82',
        choice4: '7',
        answer: 2,
    },
    {
        question: 'What is 5 + 5?',
        choice1: '55',
        choice2: '11',
        choice3: '4',
        choice4: '10',
        answer: 4,
    },
    {
        question: 'What is 6 + 6?',
        choice1: '12',
        choice2: '11',
        choice3: '21',
        choice4: '420',
        answer: 1,
    },
    {
        question: 'What is 7 + 7?',
        choice1: '21',
        choice2: '42',
        choice3: '14',
        choice4: '9',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

function getNewQuestion() {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)


        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = ("Question " + (questionCounter) + " of " + (MAX_QUESTIONS))
    progressBarFull.style.width = (((questionCounter/MAX_QUESTIONS) * 100) + "%")

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    // choices.forEach(choice => 'insertfunctionhere' ) assign answer to each "question?" how do dis

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}


// function syntaxCheck() {
//     questionCounter = ("1")
//     console.log("Question " + (questionCounter) + " of " + (MAX_QUESTIONS))
// }

// syntaxCheck()